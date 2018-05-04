$.ajax({
    url: '/list',
    success: function(data) {
        Json(JSON.parse(data))
    },
    error: function(err) {
        console.log(err)
    }
})


function Json(data) {

    //  渲染title信息
    var scroues = $('#list').html();
    var complate = Handlebars.compile(scroues);
    var html = complate(data);
    $('.cont').html(html)
    $('.cont :first-child').addClass('active')

    // 渲染 banner数据
    var scroues = $('#banner').html();
    var complate = Handlebars.compile(scroues);
    var html = complate(data[0].list);
    $('.banner').html(html)

    // 设置iscroll 的宽

    // var len = $('.cont').children().length;
    // var wid = $('.cont').children().outerWidth(true);
    // console.log(len)
    // console.log(wid)
    // $('.cont').attr({ 'width': len * wid + 15 + 'px' })
    // console.log($('.cont').width())

    $('.cont').width('1000px');
    new IScroll('.list', {
        scrollX: true
    })
    Cli(data)
}


// 点击事件切换函数

function Cli(data) {
    $('ul').on('click', 'li', function() {
        var ind = $(this).index();
        var date = data[ind].list;
        var scroues = $('#banner').html();
        var complate = Handlebars.compile(scroues);
        var html = complate(date);
        $('.banner').html(html)
        $(this).addClass('active').siblings().removeClass('active')
    })
}