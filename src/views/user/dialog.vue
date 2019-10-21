<template>
    <div>
        <div class="v-modal" tabindex="0" style="z-index: 2028;" v-show="show"></div>
        <div tabindex="-1" role="dialog" aria-modal="true" aria-label="消息" class="el-message-box__wrapper"
            style="z-index: 2030;" v-show="show">
            <div class="el-message-box">
                <div class="el-message-box__header">
                    <slot name="title"></slot>
                    <!-- <div class="el-message-box__title">
                        <span>消息</span>
                    </div> -->
                    <button type="button" aria-label="Close" class="el-message-box__headerbtn">
                        <i class="el-message-box__close el-icon-close" @click="abolish"></i>
                    </button>
                </div>
                <div class="el-message-box__content">
                    <div class="el-message-box__message">
                        <div>
                            <!-- 导入 -->
                            <div style="display:flex;margin-bottom:30px;margin-top:20px;">
                                <slot name="upload"></slot>
                                <!-- <div style="margin:0 auto;">
                                    <el-upload :show-file-list="false" action="action" :on-change="handleChange">
                                        <el-button type="primary" icon="el-icon-plus" round>导入 excel</el-button>
                                    </el-upload>
                                </div> -->
                            </div>
                            <!-- 下载模板 -->
                            <div style="margin-bottom:40px;margin-top:20px;">
                                <slot name="download"></slot>
                                <!-- <div style="margin:0 auto;text-align:center;display:flex">
                                    <div style="width:50%" class="download" @click="handleGet">
                                        <i class="icon-xiazaimoban1"></i><span
                                            style="cursor:pointer;margin-left:8px;">下载模板</span>
                                    </div>
                                    <div style="width:50%" class="download" @click="handleGet">
                                        <i class="icon-xiazai2"></i><span
                                            style="cursor:pointer;margin-left:8px;">下载模板</span>
                                    </div>
                                </div> -->
                            </div>
                            <div style="text-align:center;width:100%;height:20px;margin-bottom:20px;">
                                提示：请使用系统提供的导入模板
                            </div>

                        </div>
                    </div>
                    <div class="el-message-box__input" style="display: none;">
                        <div class="el-input">
                            <input type="text" autocomplete="off" placeholder="" class="el-input__inner">
                        </div>
                        <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
                    </div>
                </div>
                <div class="el-message-box__btns">
                    <button type="button" class="el-button el-button--default el-button--small" @click="abolish ">
                        <span>取消</span>
                    </button>
                    <button type="button" class="el-button el-button--default el-button--small el-button--primary" @click="abolish">
                        <span>确定</span>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <el-button @click="tochannel" type="primary">导入Excel</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: this.title,
            }
        },
        props: {
            title: {
                type: Boolean,
                default:false
            }
        },
        created() {
        },
        methods: {
            // 关闭弹窗 
            abolish() {
                this.show=false
            },
            // 显示弹窗
            tochannel() {
                this.show=true
            }
        }
    }
</script>
<style>
    .el-message-box__title {
        text-align: center;
    }

    .download:hover {
        color: #409EFF;
    }
</style>