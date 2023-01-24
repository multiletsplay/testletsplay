package com.letplay.letplaytest.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.letplay.letplaytest.biz.MemberBiz;
import com.letplay.letplaytest.dto.MemberDto;

@RestController
@RequestMapping("/member")
public class LetsMemberController {
	@Autowired
	private MemberBiz membiz;
	
	//로그인
//	@RequestMapping("/loginform")
//	public String login() {
//		return "login";
//	}
	
	@RequestMapping(value="login", method=RequestMethod.POST)
	public Map<String, Boolean> ajaxLogin(HttpSession session, @RequestBody MemberDto dto){
		MemberDto res = membiz.login(dto);
		boolean check = false;
		
		if(res != null) {
			session.setAttribute("login", res);
			check=true;
		}
		
		Map<String, Boolean> map = new HashMap<String,Boolean>();	
		map.put("check", check);
		
		return map;
	}
	
//	@RequestMapping("/logout")
//	public String logout() {
//		return "login";
//	}
	
	//회원가입
//	@RequestMapping("/signupform")
//	public String signup() {
//		return "signup";
//	}
	
	@RequestMapping("/signup")
	public Map<String, Object> insertRes(MemberDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		int res = membiz.insert(dto);
		
		if(res>0) {
			resultMap.put("msg", "회원가입 성공");
			resultMap.put("url", "/member/loginform");
			return resultMap;
		}else {
			resultMap.put("msg", "회원가입 실패");
			resultMap.put("url", "/member/signupform");
			return resultMap;
		}
	}
	
	
	@RequestMapping(value="/idcheck", method=RequestMethod.GET)
	public int idcheck(@RequestParam String id ) {
		int result = membiz.idcheck(id);
		return result;
	}
	
//	@RequestMapping("/findidform")
//	public String findIdform() {
//		return "findid";
//	}
	
	@GetMapping("/findid")
	public Map<String, Object> findId(@RequestParam("name") String name, @RequestParam("phone") String phone) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("id", membiz.findid(name, phone));
		if( membiz.findid(name, phone) == null ) {
			resultMap.put("msg", "아이디가 존재하지 않습니다.");
			resultMap.put("url", "/member/findidform");
			return resultMap;
		}
		return null;
	}
	
//	@RequestMapping("/findpwform")
//	public String findPwform() {
//		return "findpw";
//	}
	
	// 마이페이지
	@RequestMapping(value="/mypage", method=RequestMethod.GET)
	public Map<String, Object> selectmember(HttpSession session) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		MemberDto member = (MemberDto) session.getAttribute("login");
		resultMap.put("member", membiz.selectmember(member.getId()));
		resultMap.put("faclist", membiz.selectResfac(member.getId()));
		resultMap.put("leslist", membiz.selectResles(member.getId()));
		resultMap.put("likesfaclist", membiz.selectLikesfac(member.getId()));
		//resultMap.put("likesmatlist", membiz.selectLikesmat(member.getId()));
		resultMap.put("likesleslist", membiz.selectLikesles(member.getId()));
		//resultMap.put("listdto", membiz.selectmyreview(member.getId()) );
		
		return resultMap;
	}
	
	@RequestMapping(value="/phoneAuth", method=RequestMethod.POST)
	public Boolean phoneAuth(String tel, HttpSession session) {

	    try { // 이미 가입된 전화번호가 있으면
	        if(membiz.memberTelCount(tel) > 0) 
	            return true; 
	    } catch (Exception e) {
	        e.printStackTrace();
	    }

	    String code = membiz.sendRandomMessage(tel);
	    session.setAttribute("rand", code);
	    
	    return false;
	}
	
	@RequestMapping(value="/phoneAuthOk", method=RequestMethod.POST)
	public Boolean phoneAuthOk(HttpSession session, HttpServletRequest request) {
	    String rand = (String) session.getAttribute("rand");
	    String code = (String) request.getParameter("code");

	    System.out.println(rand + " : " + code);

	    if (rand.equals(code)) {
	        session.removeAttribute("rand");
	        return false;
	    } 

	    return true;
	}
	
	@RequestMapping(value="/updateform", method=RequestMethod.GET)
	public MemberDto updateForm(HttpSession session, MemberDto dto) {
		MemberDto member = (MemberDto) session.getAttribute("login");
		return membiz.selectmember(member.getId());
	}
	
	@PostMapping("/update")
	public Map<String,Object> update(HttpSession session, MemberDto dto) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		MemberDto member = (MemberDto) session.getAttribute("login");
		dto.setId(member.getId());
		if(membiz.update(dto) > 0) {
			resultMap.put("msg", "수정 성공");
			resultMap.put("url", "/member/mypage");
			return resultMap;
		} else {
			resultMap.put("msg", "수정 성공");
			resultMap.put("url", "/member/updateform");
			return resultMap;
		}
	}
	
	@GetMapping("/delete")
	public Map<String, Object> delete(HttpSession session) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		MemberDto member = (MemberDto) session.getAttribute("login");
		String id = member.getId();
		if(membiz.delete(id)>0) {
			resultMap.put("msg", "수정 성공");
			resultMap.put("url", "/member/loginform");
			return resultMap;
		} else {	
			resultMap.put("msg", "수정 성공");
			resultMap.put("url", "/member/mypage");
			return resultMap;
		}
	}
	
	
	@RequestMapping(value="/nicknamecheck", method=RequestMethod.GET)
	public int nicknamecheck(@RequestParam String nickname ) {
		int result = membiz.nicknamecheck(nickname);
		return result;
	}
}
