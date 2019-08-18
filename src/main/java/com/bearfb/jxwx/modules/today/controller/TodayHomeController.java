package com.bearfb.jxwx.modules.today.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *  历史上的今天路由选择
 * </p>
 *
 * @author linzimin
 * @date 2019/8/18 16:59
 */
@Controller
@RequestMapping(value = {"/","/home","/today"})
public class TodayHomeController {

    /**
     * 历史上的今天·首页
     * @return 返回"today/home"页面
     */
    @RequestMapping(value = {"","/","/home","home.html"})
    public String historyPage(){
        return "modules/today/home";
    }

}
