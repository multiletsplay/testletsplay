package com.letplay.letplaytest.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.letplay.letplaytest.biz.FacBiz;
import com.letplay.letplaytest.biz.InqReplyBiz;
import com.letplay.letplaytest.biz.InquiryBiz;
import com.letplay.letplaytest.biz.LikesBiz;
import com.letplay.letplaytest.biz.MemberBiz;
import com.letplay.letplaytest.biz.ReviewBiz;
import com.letplay.letplaytest.dto.Criteria;
import com.letplay.letplaytest.dto.FacDto;
import com.letplay.letplaytest.dto.FacResDto;
import com.letplay.letplaytest.dto.InqReplyDto;
import com.letplay.letplaytest.dto.InquiryDto;
import com.letplay.letplaytest.dto.LikesDto;
import com.letplay.letplaytest.dto.MemberDto;
import com.letplay.letplaytest.dto.PageDto;
import com.letplay.letplaytest.dto.SearchDto;

@RestController
@SessionAttributes("member")
@RequestMapping("/")
public class LetsYunaController {
	@Autowired
	private FacBiz facBiz;
	@Autowired
	private InquiryBiz inquiryBiz;
	@Autowired
	private InqReplyBiz inqreplyBiz;
	@Autowired
	private ReviewBiz reivewBiz;
	@Autowired
	private MemberBiz memBiz;
	@Autowired
	private LikesBiz likesBiz;
	
	
	// 시설
	@GetMapping("/facility/list")
	public List<FacDto> selectFacList() {
//		HttpSession session = request.getSession();
//		MemberDto member = (MemberDto) session.getAttribute("login");
//		model.addAttribute("member", memBiz.selectmember(member.getId()));
//		model.addAttribute("faclist", facBiz.selectFacList(member.getId()));
//		Map<String, Object> resultMap = new HashMap<String, Object>();
//		resultMap.put("member", memBiz.selectmember(member.getId()));
//		resultMap.put("faclist", facBiz.selectFacList(member.getId()));
//		return resultMap;
		return facBiz.selectFacList();
	}
	
	@GetMapping("/facility/select")
	public Map<String, Object> selectSports(HttpServletRequest request, int spoId) {
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("member", memBiz.selectmember(member.getId()));
		resultMap.put("faclist", facBiz.selectSports(spoId, member.getId()));
		return resultMap;
	}
	
	@GetMapping("/facility/detail")
	public Map<String, Object> selectFacDetail(HttpServletRequest request, int facSeq) {
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("member", memBiz.selectmember(member.getId()));
		resultMap.put("dto", facBiz.selectFac(facSeq));
		resultMap.put("like", likesBiz.selectfac(facSeq, member.getId()));
		resultMap.put("reviewlist", reivewBiz.selectReviewList(facSeq));
		return resultMap;
	}
	
//	@RequestMapping(value="/facility/pathfind", method=RequestMethod.POST, produces="text/plain;charset=UTF-8")
//	
//	public RedirectView findPath(@RequestParam("facName") String facName, @RequestParam("coordsy") String coordsy, @RequestParam("coordsx") String coordsx) {
//		RedirectView redirectView = new RedirectView();
//		redirectView.setUrl("https://map.kakao.com/link/to/"+facName+","+coordsy+","+coordsx);
//		return redirectView;
//	}
	
	@PostMapping("/facility/delete")
	public Map<String, Object> deletFac(@RequestParam(value="delList", required=false) List<Integer> ids) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if (ids == null) {
			resultMap.put("msg", "시설을 선택해주세요.");
			resultMap.put("url", "/facility/list");
			return resultMap;
		}else {
			for(Integer facSeq : ids) facBiz.deleteFac(facSeq);
			resultMap.put("msg", "삭제 성공");
			resultMap.put("url", "/facility/list");
			return resultMap;
		}
	}
	
//	@GetMapping("/facility/insertform")
//	public String insertFac() {
//		return "facilityinsert";
//	}
	
	@PostMapping("/facility/insert")
	public Map<String, Object> insertFac(FacDto dto, MultipartFile file) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(facBiz.insertFac(dto, file)>0) {
			resultMap.put("msg", "등록 완료");
			resultMap.put("url", "/facility/list");
			return resultMap;
		}else {
			resultMap.put("msg", "등록 실패");
			resultMap.put("url", "/facility/insertform");
			return resultMap;
		}
	}
	
	@GetMapping("/facility/updateform")
	public FacDto updateFac(Model model, int facSeq) {
		return facBiz.selectFac(facSeq);
	}
	
	@PostMapping("/facility/update")
	public Map<String, Object> updatefac(FacDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(facBiz.updateFac(dto)>0) {
			resultMap.put("msg", "수정 완료");
			resultMap.put("url", "/facility/detail?facSeq="+dto.getFacSeq());
			return resultMap;
		}else {
			resultMap.put("msg", "수정 실패");
			resultMap.put("url", "/facility/detail?facSeq="+dto.getFacSeq());
			return resultMap;
		}
	}
	
	//시설 검색	
	@GetMapping("/facility/search")
	public Map<String, Object> searchfac(HttpServletRequest request, SearchDto dto) {
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		dto.setId(member.getId());
		resultMap.put("member", memBiz.selectmember(member.getId()));
		resultMap.put("faclist", facBiz.searchFac(dto));
		return resultMap;
	}
	
	//시설 찜하기
	@RequestMapping(value="/facility/likes", method=RequestMethod.POST)
	public void insertLike(@RequestParam int facSeq, HttpServletRequest request) {
		LikesDto dto = new LikesDto();
		dto.setFacSeq(facSeq);
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		dto.setId(member.getId());
		if(likesBiz.insertfac(dto)>0) {
			System.out.println("찜 성공");		
		}else {
			System.out.println("찜 실패");
		}
	}
	
	
	@RequestMapping(value="/facility/dellikes", method=RequestMethod.GET)
	public void deleteLike(@RequestParam int facSeq, HttpServletRequest request) {
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		if(likesBiz.deletefac(facSeq, member.getId())>0) {
			System.out.println("취소 성공");	
		}else {
			System.out.println("취소 실패");	
		}
	}
	
	//시설예약
	@PostMapping("/facility/reserve")
	public Map<String, Object> reserveConfirm(HttpServletRequest request, FacResDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		//로그인정보 가져오기
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		resultMap.put("member", memBiz.selectmember(member.getId()));
		//예약번호 부여
		LocalDateTime now = LocalDateTime.now();
		String localtime = now.format(DateTimeFormatter.ofPattern("yyMMddHHmmss"));
		String resId = "res_"+ localtime;
		dto.setResId(resId);
		resultMap.put("dto", dto);
		return resultMap;
	}
	
	//시설 결제후 예약내역 db저장
	@PostMapping("/facility/payment")
	public Map<String, Object> reservePayment(FacResDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(facBiz.insertRes(dto)>0) {
			resultMap.put("msg", "예약 성공");
			resultMap.put("url", "/mypage");
			return resultMap;
		}else {
			resultMap.put("msg", "예약 실패");
			resultMap.put("url", "/facility/detail?facSeq="+dto.getFacSeq());
			return resultMap;
		}
	}
	
	//1대1문의
	@GetMapping("/inquiry/list")
	public Map<String, Object> selectInquirylist(HttpServletRequest request, Criteria criteria) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		//로그인정보
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		resultMap.put("member", memBiz.selectmember(member.getId()));
		
		//페이징
		int inqListCnt = inquiryBiz.getTotal();
		PageDto paging = new PageDto();
		paging.setCri(criteria);
		paging.setTotal(inqListCnt);
	
		resultMap.put("inquirylist", inquiryBiz.selectList(criteria));
		resultMap.put("paging", paging);
//		model.addAttribute("paging", new PageDto(10, inquiryBiz.getTotal(), criteria));
		return resultMap;
	}

	@GetMapping("/inquiry/detail")
	public Map<String, Object> selectInquiryOne(HttpServletRequest request, int inqSeq) {
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("member", memBiz.selectmember(member.getId()));
		resultMap.put("dto", inquiryBiz.selectOne(inqSeq));
		resultMap.put("reply", inqreplyBiz.select(inqSeq));
		return resultMap;
	}
	
	@GetMapping("/inquiry/insertform")
	public MemberDto insertFormInq(HttpServletRequest request) {
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		
		return memBiz.selectmember(member.getId());
	}
	
	@PostMapping("/inquiry/insert")
	public Map<String, Object> insertInq(InquiryDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(inquiryBiz.insert(dto)>0) {
			resultMap.put("msg", "등록 완료");
			resultMap.put("url", "/inquiry/list");
			return resultMap;
		}else {
			resultMap.put("msg", "등록 실패");
			resultMap.put("url", "/inquiry/insertform");
			return resultMap;
		}
	}
	
	@GetMapping("/inquiry/updateform")
	public InquiryDto updateFormInq(int inqSeq) {
		return inquiryBiz.selectOne(inqSeq);
	}
	
	@PostMapping("/inquiry/update")
	public Map<String, Object> updateInq(InquiryDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(inquiryBiz.update(dto)>0) {
			resultMap.put("msg", "수정 완료");
			resultMap.put("url", "/inquiry/detail?inqSeq="+dto.getInqSeq());
			return resultMap;
		}else {
			resultMap.put("msg", "수정 실패");
			resultMap.put("url", "/inquiry/detail?inqSeq="+dto.getInqSeq());
			return resultMap;
		}
	}
	
	@GetMapping("/inquiry/delete")
	public Map<String, Object> deleteInq(int inqSeq) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(inquiryBiz.delete(inqSeq)>0) {
			resultMap.put("msg", "삭제 성공");
			resultMap.put("url", "/inquiry/list");
			return resultMap;
		}else {
			resultMap.put("msg", "삭제 실패");
			resultMap.put("url", "/inquiry/detail?inqSeq="+inqSeq);
			return resultMap;
		}
	}
	
	//문의 댓글
	@PostMapping("/inquiry/reply/insert")
	public Map<String, Object> insertInqRep(InqReplyDto dto, int inqSeq ) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(inqreplyBiz.insert(dto)>0) {
			resultMap.put("msg", "등록 완료");
			resultMap.put("url", "/inquiry/detail?inqSeq="+inqSeq);
			return resultMap;
		}else {
			resultMap.put("msg", "등록 실패");
			resultMap.put("url", "/inquiry/detail?inqSeq="+inqSeq);
			return resultMap;
		}
	}
	
	@PostMapping("/inquiry/reply/update")
	public Map<String, Object> updateInqRep(InqReplyDto dto, int inqSeq) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(inqreplyBiz.update(dto)>0) {
			resultMap.put("msg", "수정 완료");
			resultMap.put("url", "/inquiry/detail?inqSeq="+dto.getInqSeq());
			return resultMap;
		}else {
			resultMap.put("msg", "수정 실패");
			resultMap.put("url", "/inquiry/detail?inqSeq="+dto.getInqSeq());
			return resultMap;
		}
	}
	
	@GetMapping("/inquiry/reply/delete")
	public Map<String, Object> deleteInqRep(int repSeq, int inqSeq) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(inqreplyBiz.delete(repSeq)>0) {
			resultMap.put("msg", "삭제 성공");
			resultMap.put("url", "/inquiry/detail?inqSeq="+inqSeq);
			return resultMap;
		}else {
			resultMap.put("msg", "삭제 실패");
			resultMap.put("url", "/inquiry/detail?inqSeq="+inqSeq);
			return resultMap;
		}
	}

}