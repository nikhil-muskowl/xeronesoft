// bootstrap 4 compatible theme switcher
var $;
var container = $('<div class="bg-accent text-center" style="position:fixed;top:17%;right:0;z-index:2000"><a href class="px-2" data-toggle="collapse" data-target="#themer"><i class="mx-1 icon-md ion-ios-gear-outline"></i></a></div>');
var themer = $('<div class="collapse bg-white" id="themer"></div>');
var themes = [
        {name:'default',color:'#fcf113'},
        {name:'darkorange',color:'darkorange'},
        {name:'hotpink',color:'hotpink'},
        {name:'lime',color:'lime'},
        {name:'aqua',color:'aqua'},
        {name:'blue',color:'#688a9e'},
        {name:'dark',color:'#151515'}
    ];
    
for (var t in themes) {
    var theme = themes[t];
    var themeLink = $('<a class="nav-link theme-selector" data-toggle="collapse" data-target="#themer" data-theme="'+theme.name+'" href><span class="badge badge-pill" style="background-color:'+theme.color+';">&nbsp;</span></a>');
    themeLink.on('click',function(){
        var name = $(this).data("theme");
        $('link[href^="css/bootstrap-custom-"]').remove();
        $('head').append('<link rel="stylesheet" href="css/bootstrap-custom-'+name+'.css" type="text/css" />');
        return;
    });
    themeLink.appendTo(themer);
}

themer.appendTo(container);
container.appendTo('body');