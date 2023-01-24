package com.letplay.letplaytest.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.letplay.letplaytest.biz.LessonBiz;
import com.letplay.letplaytest.biz.LikesBiz;
import com.letplay.letplaytest.biz.MemberBiz;
import com.letplay.letplaytest.biz.ReviewBiz;
import com.letplay.letplaytest.dto.LessonDto;
import com.letplay.letplaytest.dto.LessonResDto;
import com.letplay.letplaytest.dto.LikesDto;
import com.letplay.letplaytest.dto.MemberDto;

@RestController
@RequestMapping("/")
public class LetsLessonController {
	
	@Autowired
	private LessonBiz LessonBiz;
	@Autowired
	private ReviewBiz reviewBiz;
	@Autowired
	private MemberBiz memBiz;
	@Autowired
	private LikesBiz likesBiz;
	
	@GetMapping("/lesson/list")
	public Map<String, Object> lessonList(HttpServletRequest request ) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		resultMap.put("member", memBiz.selectmember(member.getId()));
		resultMap.put("lessonlist", LessonBiz.selectLessonList(member.getId()));
		return resultMap;
	}
	
	@GetMapping("/lesson/select")
	public Map<String, Object> selectSports(HttpServletRequest request, int spoId) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		resultMap.put("member", memBiz.selectmember(member.getId()));
		resultMap.put("lessonlist", LessonBiz.selectSports(member.getId(), spoId));
		return resultMap;
	}
	
	@GetMapping("/lesson/detail")
	public Map<String, Object> lessonDetail(HttpServletRequest request, int lesSeq) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		resultMap.put("dto", LessonBiz.selectLesson(lesSeq));
		resultMap.put("schlist", LessonBiz.selectSchedule(lesSeq));
		resultMap.put("like", likesBiz.selectles(lesSeq, member.getId()));
		resultMap.put("reviewlist", reviewBiz.selectLesRevlist(lesSeq));
		return resultMap;
	}
	
//	@GetMapping("/lesson/insertform")
//	public String insertLesson() {
//		return "lessoninsert";
//	}
	
	@PostMapping("/lesson/insert")
	public Map<String, Object> insertLesson(LessonDto dto, MultipartFile file) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(LessonBiz.insertLesson(dto, file)>0) {
			resultMap.put("msg", "등록 완료");
			resultMap.put("url", "/lesson/list");
			return resultMap;
		}else {
			resultMap.put("msg", "등록 실패");
			resultMap.put("url", "/lesson/insertform");
			return resultMap;
		}
	}
	
	@GetMapping("/lesson/updateform")
	public LessonDto updateLesson(int lesSeq) {
		return LessonBiz.selectLesson(lesSeq);
	}
	
	@PostMapping("/lesson/update")
	public Map<String, Object> updateLesson(LessonDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(LessonBiz.updatelesson(dto)>0) {
			resultMap.put("msg", "수정 완료");
			resultMap.put("url", "/lesson/detail?lesSeq="+dto.getLesSeq());
			return resultMap;
		}else {
			resultMap.put("msg", "수정 실패");
			resultMap.put("url", "/lesson/detail?lesSeq="+dto.getLesSeq());
			return resultMap;
		}
	}
	
	@PostMapping("/lesson/delete")
	public Map<String, Object> deleteLesson(@RequestParam(value="delList", required=false) List<Integer> ids) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if (ids == null) {
			resultMap.put("msg", "시설을 선택해주세요.");
			resultMap.put("url", "/lesson/list");
			return resultMap;
		}else {
			for(Integer lesSeq : ids) LessonBiz.deleteLesson(lesSeq);
			resultMap.put("msg", "삭제 성공");
			resultMap.put("url", "/lesson/list");
			return resultMap;
		}
	}
	
	//시설 찜하기
	@RequestMapping(value="/lesson/likes", method=RequestMethod.POST)
	public void insertLike(@RequestParam int lesSeq, HttpServletRequest request ) {
		LikesDto dto = new LikesDto();
		dto.setLesSeq(lesSeq);
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		dto.setId(member.getId());
		if(likesBiz.insertles(dto)>0) {
			System.out.println("찜 성공");		
		}else {
			System.out.println("찜 실패");
		}
	}
	
	@RequestMapping(value="/lesson/dellikes", method=RequestMethod.GET)
	public void deleteLike(@RequestParam int lesSeq, HttpServletRequest request ) {
		HttpSession session = request.getSession();
		MemberDto member = (MemberDto) session.getAttribute("login");
		if(likesBiz.deleteles(lesSeq, member.getId())>0) {
			System.out.println("취소 성공");	
		}else {
			System.out.println("취소 실패");	
		}
	}
	
	//레슨 예약
	@PostMapping("/lesson/reserve")
	public Map<String, Object> reserveConfirm(HttpServletRequest request, LessonResDto dto) {
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
	
	@PostMapping("/lesson/payment")
	public Map<String, Object> reservePayment(LessonResDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if(LessonBiz.insertRes(dto)>0) {
			resultMap.put("msg", "예약 성공");
			resultMap.put("url", "/mypage");
			return resultMap;
		}else {
			resultMap.put("msg", "예약 실패");
			resultMap.put("url", "/lesson/detail?lesSeq="+dto.getLesSeq());
			return resultMap;
		}
	}
	
	
}

