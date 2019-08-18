package com.bearfb.jxwx.modules.history.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *  看历史路由选择
 * </p>
 *
 * @author linzimin
 * @date 2019/8/18 11:19
 */
@Controller
@RequestMapping("/history")
public class HistoryHomeController {

    /**
     * 看历史·首页
     * @return 返回"history/home"看历史页面
     */
    @RequestMapping(value = {"","/","/home","home.html"})
    public String historyPage(){
        return "modules/history/home";
    }
}
