import style from 'styled-components';

export const HeaderTopBar = style.div`
    background:#000;
    color:#fff;
    .topbar-right .ant-btn{
        border:0;
        border-radius:0;
        background:#f93;
        padding: 15px 30px;
        line-height: unset;
        height: auto;
        font-family: 'Open Sans', sans-serif;
        font-weight:600;
        font-size:16px;
        text-transform: capitalize;
        color: #000;
    }
    .topbar_phone{
        display: inline-block;
        
    }
    .topbar_phone a{
        font-weight:700;
        color:#fff;
        font-size:18px;
        margin-right:10px;
    }
    .topbar_phone a svg{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 5px;
        webkit-animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
        animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
    }
    @-webkit-keyframes phonering-alo-circle-img-anim {
        0% {
            -webkit-transform:rotate(0) scale(1) skew(1deg)
        }
    
        10% {
            -webkit-transform:rotate(-25deg) scale(1) skew(1deg)
        }
    
        20% {
            -webkit-transform:rotate(25deg) scale(1) skew(1deg)
        }
    
        30% {
            -webkit-transform:rotate(-25deg) scale(1) skew(1deg)
        }
    
        40% {
            -webkit-transform:rotate(25deg) scale(1) skew(1deg)
        }
    
        50% {
            -webkit-transform:rotate(0) scale(1) skew(1deg)
        }
    
        100% {
            -webkit-transform:rotate(0) scale(1) skew(1deg)
        }
    }
    @keyframes phonering-alo-circle-img-anim {
        0% {
            -webkit-transform:rotate(0) scale(1) skew(1deg)
        }
    
        10% {
            -webkit-transform:rotate(-25deg) scale(1) skew(1deg)
        }
    
        20% {
            -webkit-transform:rotate(25deg) scale(1) skew(1deg)
        }
    
        30% {
            -webkit-transform:rotate(-25deg) scale(1) skew(1deg)
        }
    
        40% {
            -webkit-transform:rotate(25deg) scale(1) skew(1deg)
        }
    
        50% {
            -webkit-transform:rotate(0) scale(1) skew(1deg)
        }
    
        100% {
            -webkit-transform:rotate(0) scale(1) skew(1deg)
        }
    }
`
export const IconList = style.div`
   a{
    border: 2px solid #fff;
    border-radius: 100%;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    margin:10px 0;
   }
   a:not(:last-child){
    margin-right:10px;
   }
`
export const Container = style.div`
    max-width:1170px;
    padding:0 15px;
    margin:0 auto;
`
export const MenuBar = style.div`
    padding: 0 20px;
    overflow: auto; 
    .Wrap{
        display: flex;
        align-items: center;
    }
    .logo{
        width: 150px;
        float: left;
    }
    .logo a{
        display: inline-block;
        font-size: 20px;
        padding: 19px 20px;
        text-transform: capitalize;
    } 
    @media(max-width: 767px){
        .logo a{
            margin-left: -20px;
            padding: 10px 20px;
        }

    }

`
export const MenuCon = style.div`
    width: calc(100% - 150px);
    float: left;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .ant-menu-item{
        padding: 0px 5px;
        color:#000;
    }
    .ant-menu-item,
    .ant-menu-submenu{
        font-size:16px;
    }
    .ant-menu-item a,
    .ant-menu-submenu {
        color:#000;
    }
    
    .ant-menu-submenu-title{
        // padding: 10px 20px;
    }
    .ant-menu-item a,
    .ant-menu-submenu-title a{
        padding: 10px 15px;
    }
    .ant-menu-horizontal{
        border-bottom: none;
    }
    .leftMenu{
        float: left;
    }
    .rightMenu{
        float: right;
    }
    .ant-menu-item:hover, .ant-menu-item-active,
    .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, 
    .ant-menu-submenu-active,
    .ant-menu-submenu-title:hover,
    .ant-menu-item:hover, 
    .ant-menu-item-active,
    .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
    .ant-menu-submenu-active,
    .ant-menu-submenu-title:hover,
    .ant-menu-horizontal > .ant-menu-item a:hover {
        color: #f93;
    }
    .ant-menu-horizontal > .ant-menu-item:hover,
    .ant-menu-horizontal > .ant-menu-submenu:hover,
    .ant-menu-horizontal > .ant-menu-item-active,
    .ant-menu-horizontal > .ant-menu-submenu-active, 
    .ant-menu-horizontal > .ant-menu-item-open,
    .ant-menu-horizontal > .ant-menu-submenu-open,
    .ant-menu-horizontal > .ant-menu-item-selected, 
    .ant-menu-horizontal > .ant-menu-submenu-selected{
        color: #f93;
        border-bottom: 2px solid #f93;
    }
    .barsMenu{
        float: right;
        height: 32px;
        padding: 6px;
        margin-top: 8px;
        display: none;
        background: none;
    }
    .barsBtn{
        display: block;
        width: 20px;
        height: 2px;
        background: #1890ff;
        position: relative;
    }
    .barsBtn:after,
    .barsBtn:before{
        content: attr(x);
        width: 20px;
        position: absolute;
        top: -6px;
        left: 0;
        height: 2px;
        background: #1890ff;
    }
    .barsBtn:after{
        top: auto;
        bottom: -6px;
    }
    .ant-drawer-body{
        padding: 0;
    }
    .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
    .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu{
        display: inline-block;
        width: 100%;
    }
    .ant-drawer-body .ant-menu-horizontal{
        border-bottom: none;
    }
    .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover{
        border-bottom-color: transparent;
    }
    
    
    @media(max-width: 767px){
        justify-content: flex-end;

        .leftMenu,
        .rightMenu{
            display: none;
        }
        .barsMenu{
            display: inline-block;
        }
        .menuCon .ant-menu-item,
        .menuCon .ant-menu-submenu-title{
            padding: 1px 20px;
        }
        .ant-drawer-wrapper-body .ant-menu-horizontal > .ant-menu-item,
        .ant-drawer-wrapper-body .ant-menu-horizontal > .ant-menu-submenu{
            display:block;
        }
        
    }
`

export const HeaderGroupAct = style.div`
    display:flex;
    flex-wrap: nowrap;
    justify-content: flex-end;

    > div:not(:last-child){
        margin-right:20px;
    }

    a{
        font-size:16px;
        color:#000;
        position: relative;
    }
    a:not(:last-child){
        margin-right:10px;
    }
    .count{
        position: absolute;
        top: -10px;
        right: -15px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
        text-align: center;
        font-size: 12px;
        background-color: #f93;
        color: #fff;
    }
    .site_header_account svg{
        margin-right:5px;
    }
`
export const SearchWrap = style.div`
    background:#fff;
    padding:15px 0;
    .ant-btn-submit{
        height: 3rem;
        background-color: #f93;
        color: #fff;
        border: 0;
        border-radius:0;
        width: 100%;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 18px;
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
    input{
        height:3rem;
        border-radius:0; 
    }
    input{
        border-left:0;
        border-right:0;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-item{
        line-height:2.7rem;
    }
    
`
export const HeroSection = style.div`
    padding:160px 0;
    background-size:cover;
    background-position:center;
    background-attachment:fixed;
    position:relative;
    &:before{
        content:'';
        background:rgba(0,0,0,0.6);
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    h3{
        color:#fff;
        font-size:50px;
        font-family: 'Open Sans', sans-serif;
        font-weight:700;
        text-align:center;
    }
`
export const RelativeContainer = style(Container)`
    position:relative;
    z-index:9;
`
export const SectionWrapper = style.div`
    padding:100px 0;
`
export const CardWrap = style.div`
    background-color:#fff;
    padding:15px;
    box-shadow:0 0 1px rgba(0,0,0,0.2);
`
export const FigureWrap = style.div`
    position:relative;
    &:before{
        content:'';
        position:absolute;
        bottom:0;
        left: 0;
        right: 0;
        background: -webkit-linear-gradient(bottom,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%);
        background: linear-gradient(0deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 100%);
        -webkit-transition: all .65s ease-in-out;
        transition: all .65s ease-in-out;
        z-index: 1;
        height:50%;
    }
`
export const PriceAmount = style.div`
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    padding: 0 20px 0 30px;
    z-index: 4;
`