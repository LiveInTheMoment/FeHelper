baidu.fePopup=(function(){var a=null;var e=function(){jQuery(".fe-function-list .-x-fcp").click(function(l){baidu.log.track(LOG.popup_page_fcp);window.close();a.BgPageInstance.runHelperByType(MSG_TYPE.FCP_HELPER_DETECT)})};var g=function(){jQuery(".fe-function-list .-x-grid").click(function(l){baidu.log.track(LOG.popup_page_grid);window.close();a.BgPageInstance.runHelperByType(MSG_TYPE.GRID_DETECT)})};var d=function(){jQuery(".fe-function-list .-x-fdp").click(function(l){baidu.log.track(LOG.popup_page_fdp);window.close();a.BgPageInstance.runHelperByType(MSG_TYPE.FDP_HELPER)})};var j=function(){jQuery(".fe-function-list .-x-endecode").click(function(l){baidu.log.track(LOG.popup_page_endecode);window.close();a.BgPageInstance.runHelperByType(MSG_TYPE.EN_DECODE)})};var b=function(){jQuery(".fe-function-list .-x-jsonformat").click(function(l){window.close();a.BgPageInstance.runHelperByType(MSG_TYPE.JSON_FORMAT)})};var k=function(){jQuery(".fe-function-list .-x-qrcode").click(function(l){window.close();a.BgPageInstance.runHelperByType(MSG_TYPE.QR_CODE)})};var f=function(){if(a.baidu.feOption.getOptionItem("opt_item_showfdpmenu")=="true"){jQuery("li.-x-fdp").removeClass("fe-hide");d()}};var i=function(){jQuery(".fe-function-list .-x-loadtime").click(function(l){baidu.log.track(LOG.popup_page_loadtime);window.close();a.BgPageInstance.runHelperByType(MSG_TYPE.SHOW_PAGE_LOAD_TIME)})};var h=function(){e();g();f();j();i();b();k()};var c=function(){chrome.runtime.getBackgroundPage(function(l){a=l;h()})};return{init:c}})();$(function(){baidu.fePopup.init()});