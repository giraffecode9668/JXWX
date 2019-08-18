package com.bearfb.jxwx.modules.user.entity;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * <p>
 *  用户实体
 * </p>
 *
 * @author linzimin
 * @date 2019/8/18 10:48
 */
@Entity
@Table(name = "_user")
public class UserEntity {

    /**
     * 自定义生成策略注解 用jpa-uuid作为唯一标识 uuid作为生成策略
     * 主键生成策略 这里对id主键使用之前定义好的jap-uuid生成策略 自行查阅生成策略
     * id生成策略使用uuid生成策略
     * 生成器使用上面的生成器（name = "jpa-uuid"）
     */
    @Id
    @GenericGenerator(name = "jpa-uuid", strategy = "uuid")
    @GeneratedValue(generator = "jpa-uuid")
    private String id;

    /**
     * 该实体生成的时间 在数据库生成表的时候会自动生成
     * 在mysql可以看到类型是biging 表示19位超大整数
     * 创建时间字段，创建实体并持久化时数据库自动生成
     * 类型：Long时间戳毫秒
     */
    @CreatedDate
    private Long createTime;

    /**
     * 更新时间字段，更新实体数据并持久化时数据库自动更新
     * 类型：Long时间戳毫秒
     */
    @LastModifiedDate
    private Long updateTime;

    /**
     * 邮箱账号
     */
    private String account;

    /**
     * 用户昵称
     */
    private String nickname;

    /**
     * 密码
     * 使用Md5加密
     */
    private String password;

    /**
     * 手机号码
     */
    private String phone;

    /**
     * 用户头像Url
     */
    private String avatar;


    public UserEntity() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Long createTime) {
        this.createTime = createTime;
    }

    public Long getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Long updateTime) {
        this.updateTime = updateTime;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatarUrl) {
        this.avatar = avatarUrl;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
