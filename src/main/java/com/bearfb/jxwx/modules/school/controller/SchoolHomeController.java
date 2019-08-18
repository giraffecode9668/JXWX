package com.bearfb.jxwx.modules.school.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>
 *  我爱我校路由选择
 * </p>
 *
 * @author linzimin
 * @date 2019/8/18 16:56
 */
@Controller
@RequestMapping("/school")
public class SchoolHomeController {

    /**
     * 我爱我校·首页
     * @return 返回"school/home"看历史页面
     */
    @RequestMapping(value = {"","/","/home","home.html"})
    public String schoolPage(){
        return "modules/school/home";
    }
}
