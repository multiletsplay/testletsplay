package com.letplay.letplaytest.controller;

import java.time.Duration;
import java.time.LocalDateTime;
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
import com.letplay.letplaytest.biz.LikesBiz;
import com.letplay.letplaytest.biz.MatchBiz;
import com.letplay.letplaytest.biz.MemberBiz;
import com.letplay.letplaytest.biz.NoticeBiz;
import com.letplay.letplaytest.dto.Criteria;
import com.letplay.letplaytest.dto.LikesDto;
import com.letplay.letplaytest.dto.MatchDto;
import com.letplay.letplaytest.dto.MemberDto;
import com.letplay.letplaytest.dto.NoticeDto;
import com.letplay.letplaytest.dto.PageDto;
import com.letplay.letplaytest.dto.SearchDto;

@RestController
@RequestMapping("/")
public class LetsMatchController {
    @Autowired
    private MatchBiz matchBiz;
    @Autowired
    private NoticeBiz noticeBiz;
    @Autowired
    private MemberBiz memBiz;
    @Autowired
    private LikesBiz likesBiz;
    
    // 매치controller
    
        @GetMapping("/match/list")
        public Map<String, Object> selectMatchList(HttpServletRequest request) {
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            List<MatchDto> matchlist = matchBiz.selectMatchList(member.getId());
            Map<MatchDto, Integer> dDayMap = new HashMap<MatchDto, Integer>();
            Map<String, Object> resultMap = new HashMap<String, Object>();
            for(MatchDto dto : matchlist) {
                LocalDateTime matchEnddate = dto.getMatchEnddate();
                LocalDateTime matchRegdate = dto.getMatchRegdate();
                Duration duration = Duration.between(matchEnddate, matchRegdate);
                int days = ((int) duration.toDays()-1)*-1;
                dto.setdDay(days);
                System.out.println("Remaining days: " + days);
                dDayMap.put(dto, days);
            }
            resultMap.put("ddays", dDayMap);
            resultMap.put("list",matchBiz.selectMatchList(member.getId()));
            resultMap.put("cnt",matchBiz.matchListCount());
            resultMap.put("endcnt",matchBiz.matchEndCount());
            return resultMap;
        }
        
        @GetMapping("/match/category")
        public Map<String, Object> selectSports(int spoId, HttpServletRequest request) {
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            List<MatchDto> matchEndlist = matchBiz.selectEndList(spoId);
            Map<MatchDto, Integer> dEndDayMap = new HashMap<MatchDto, Integer>();
            Map<String, Object> resultMap = new HashMap<String, Object>();
            for(MatchDto dto : matchEndlist) {
                LocalDateTime matchEnddate = dto.getMatchEnddate();
                LocalDateTime matchRegdate = dto.getMatchRegdate();
                Duration duration = Duration.between(matchEnddate, matchRegdate);
                int days = ((int) duration.toDays()-1)*-1;
                dto.setdDay(days);
                dEndDayMap.put(dto, days);
            }
            List<MatchDto> matchlist = matchBiz.selectMatchList(member.getId());
            Map<MatchDto, Integer> dDayMap = new HashMap<MatchDto, Integer>();
            for(MatchDto dto : matchlist) {
                LocalDateTime matchEnddate = dto.getMatchEnddate();
                LocalDateTime matchRegdate = dto.getMatchRegdate();
                Duration duration = Duration.between(matchEnddate, matchRegdate);
                int days = ((int) duration.toDays()-1)*-1;
                dto.setdDay(days);
                dDayMap.put(dto, days);
            }
            resultMap.put("dEnddays", dEndDayMap);
            resultMap.put("ddays", dDayMap);
            resultMap.put("list",matchBiz.selectSports(spoId));
            resultMap.put("cnt",matchBiz.matchListCount());
            resultMap.put("end",matchBiz.selectEndList(spoId));
            resultMap.put("endcnt",matchBiz.matchEndCount());
            return resultMap;
        }
        
        //매칭 검색 
            @GetMapping("/match/search")
            public Map<String, Object> searchmatch(SearchDto dto, HttpServletRequest request) {
                HttpSession session = request.getSession();
                MemberDto member = (MemberDto) session.getAttribute("login");
                List<MatchDto> matchlist = matchBiz.selectMatchList(member.getId());
                Map<String, Object> resultMap = new HashMap<String, Object>();
                Map<MatchDto, Integer> dDayMap = new HashMap<MatchDto, Integer>();
                for(MatchDto vo : matchlist) {
                    LocalDateTime matchEnddate = vo.getMatchEnddate();
                    LocalDateTime matchRegdate = vo.getMatchRegdate();
                    Duration duration = Duration.between(matchEnddate, matchRegdate);
                    int days = ((int) duration.toDays()-1)*-1;
                    vo.setdDay(days);
                    dDayMap.put(vo, days);
                }
                
                
                resultMap.put("ddays", dDayMap);
                resultMap.put("cnt",matchBiz.matchListCount());
                resultMap.put("list",matchBiz.searchMatch(dto));
                resultMap.put("endcnt",matchBiz.matchEndCount());
                
                return resultMap;
            }
            
        @GetMapping("/match/detail")
        public Map<String, Object> selectOneMatch(HttpServletRequest request, int matchSeq) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            resultMap.put("member", memBiz.selectmember(member.getId()));
            resultMap.put("dto", matchBiz.selectMatchOne(matchSeq, member.getId()));
            resultMap.put("reply",matchBiz.selectReplyList(matchSeq));
            resultMap.put("joinlist", matchBiz.selectJoinList(matchSeq));
            resultMap.put("like",likesBiz.selectMatch(matchSeq, member.getId()));
            return resultMap;
        }
                
        
        @PostMapping("/match/insert")
        public Map<String, Object> insertMatch(MatchDto dto) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            if(matchBiz.insertMatch(dto) > 0 ) {
                resultMap.put("url", "/match/list");
                return resultMap;
            }else {
                resultMap.put("url", "/match/insertform");
                return resultMap;
            }
        }
        
        @GetMapping("/match/insertform")
        public MemberDto insertFormMatch(HttpServletRequest request, Model model) {
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            return memBiz.selectmember(member.getId());
        }
        
        
        
        @GetMapping("/match/updateform")
        public MatchDto updateFormMatch(HttpServletRequest request, int matchSeq) {
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            return matchBiz.selectMatchOne(matchSeq, member.getId());
        }
        
        @PostMapping("/match/update")
        public Map<String, Object> updateMatch(Model model, MatchDto dto) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            if(matchBiz.updateMatch(dto)>0) {
                resultMap.put("url", "/match/detail?matchSeq="+dto.getMatchSeq());
                return resultMap;
            }else {
                resultMap.put("url", "/match/updateform?matchSeq="+dto.getMatchSeq());
                return resultMap;
            }
        }
        
        @GetMapping("/match/delete")
        public Map<String, Object> deleteMatch(int matchSeq) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            if(matchBiz.deleteMatch(matchSeq)>0) {
                resultMap.put("url", "/match/list");
                return resultMap;
            }else {
                resultMap.put("url", "/match/list");
                return resultMap;
            }
        }
        
        @PostMapping("/match/insertreply")
        public Map<String, Object> insertReply(String repContent, String id, int matchSeq) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            if(matchBiz.insertReply(repContent, id, matchSeq)>0) {
                resultMap.put("url", "/match/detail?matchSeq=" + matchSeq);
                return resultMap;
            }else {
                resultMap.put("url", "redirect:/match/detail?matchSeq=" + matchSeq);
                return resultMap;
            }
        }
        
        @GetMapping("/match/delreply")
        public Map<String, Object> delReply(int repSeq, int matchSeq) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            matchBiz.delReply(repSeq);
            resultMap.put("url", "/match/detail?matchSeq=" + matchSeq );
            return resultMap;
        }
        
//      @GetMapping("/match/joinMatchList")
//      public String joinMatchList(HttpSession session,Model model) {
//          MemberDto member = (MemberDto) session.getAttribute("login");
//          
//          resultMap.put("joinmatchlist", member.getId()); 
//          
//          return "matchdetail";
//      }
            
        @ResponseBody
        @PostMapping("/match/matchJoin")
        public void MatchJoin(@RequestParam int matchSeq, @RequestParam String id) {
            if(matchBiz.MatchJoin(matchSeq, id)>0) {
                System.out.println("참여 성공");
            }else {
                System.out.println("참여 실패");
            }
        }
        
        @ResponseBody
        @GetMapping("/match/matchUnjoin")
        public void MatchUnjoin(@RequestParam int matchSeq, @RequestParam String id) {
            if(matchBiz.MatchUnjoin(matchSeq, id)>0) {
                System.out.println("취소 성공");
            }else {
                System.out.println("취소 실패");
            }
        }
        //매치 찜하기
        @ResponseBody
        @RequestMapping(value="/match/likes", method=RequestMethod.POST)
        public void insertLike(@RequestParam int matchSeq, HttpServletRequest request) {
            LikesDto dto = new LikesDto();
            dto.setMatchSeq(matchSeq);
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            dto.setId(member.getId());
            if(likesBiz.insertMatch(dto)>0) {
                System.out.println("찜 성공");     
            }else {
                System.out.println("찜 실패");
            }
        }
        
        @ResponseBody
        @RequestMapping(value="/match/dellikes", method=RequestMethod.GET)
        public void deleteLike(@RequestParam int matchSeq, HttpServletRequest request) {
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            if(likesBiz.deleteMatch(matchSeq, member.getId())>0) {
                System.out.println("취소 성공");  
            }else {
                System.out.println("취소 실패");  
            }
        }
        
        //공지사항
        @GetMapping("/notice/list")
        public Map<String, Object> selectNoticelist(NoticeDto dto, Model model, Criteria criteria) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            int noticeListCnt = noticeBiz.getTotal();
            PageDto paging = new PageDto();
            paging.setCri(criteria);
            paging.setTotal(noticeListCnt);
            resultMap.put("noticelist", noticeBiz.selectNoticeList(criteria));
            resultMap.put("paging", paging);
            return resultMap;
        }
        @GetMapping("/notice/detail")
        public Map<String, Object> selectNoticeOne(Model model, int noticeSeq) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            resultMap.put("dto", noticeBiz.selectNoticeOne(noticeSeq));
            return resultMap;
        }
        
//      @GetMapping("/match/insertform")
//      public MemberDto insertFormMatch(HttpServletRequest request, Model model) {
//          HttpSession session = request.getSession();
//          MemberDto member = (MemberDto) session.getAttribute("login");
//          return memBiz.selectmember(member.getId());
//      }
        @GetMapping("/notice/insertform")
        public MemberDto  insertNoticeForm(HttpServletRequest request) {
            HttpSession session = request.getSession();
            MemberDto member = (MemberDto) session.getAttribute("login");
            return memBiz.selectmember(member.getId());
        }
        
        @PostMapping("/notice/insert")
        public Map<String, Object> insertNotice(NoticeDto dto) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            if(noticeBiz.insertNotice(dto)>0) {
                resultMap.put("url", "/notice/list");
                return resultMap;
            }else {
                resultMap.put("url", "/notice/insertform");
                return resultMap;
            }
        }
        
        @GetMapping("/notice/updateform")
        public NoticeDto updateForm(Model model, int noticeSeq) {
            return noticeBiz.selectNoticeOne(noticeSeq);
        }
        
        @PostMapping("/notice/update")
        public Map<String, Object> updateNotice(NoticeDto dto) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            if(noticeBiz.updateNotice(dto) > 0) {
                resultMap.put("url", "/notice/detail?noticeSeq="+dto.getNoticeSeq());
                return resultMap;
            }else {
                resultMap.put("url", "/notice/updateform?noticeSeq="+dto.getNoticeSeq());
                return resultMap;
            }
        }
        
        @GetMapping("/notice/delete")
        public Map<String, Object> deleteNotice(int noticeSeq) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            if(noticeBiz.deleteNotice(noticeSeq)>0) {
                resultMap.put("url", "/notice/list");
                return resultMap;
            }else {
                resultMap.put("url", "redirect:/notice/detail?noticeSeq="+noticeSeq);
                return resultMap;
            }
        }
        
        
        
}