$(document).ready(()=>{
    $('#round-trip').click(()=>{
        $('#one-way').removeClass('active');
        $('#round-trip').addClass('active');
        document.getElementById('one-way').style.color = '#3f51b5';
        document.getElementById('round-trip').style.color = '#8f8f8f';
        $('#return-date').attr('disabled', false).css('opacity', 1).removeClass('no-cursor');
        $('#select-airport-dropdown .select-airport').attr('disabled', false).css('opacity', 1).removeClass('no-cursor');
    });

    $('#one-way').click(()=>{
        $('#round-trip').removeClass('active');
        $('#one-way').addClass('active');
        document.getElementById('one-way').style.color = '#8f8f8f';
        document.getElementById('round-trip').style.color = '#3f51b5';
        $('#return-date').attr('disabled', true).css('opacity', .5).addClass('no-cursor');
        //$('#select-airport-dropdown .select-airport').attr('disabled', true).css('opacity', .5).addClass('no-cursor');
    });

    let adultCount = 0;
    let childCount = 0;

    $('#adult-minus').click(()=>{
        if (adultCount < 0){
            adultCount = 0;
            setAdultCount(adultCount);
        } else {
            adultCount = adultCount - 1;
            setAdultCount(adultCount);
        }
    });

    $('#adult-plus').click(()=>{
        if (adultCount < 0){
            adultCount = 0;
            setAdultCount(adultCount);
        } else {
            adultCount = adultCount + 1;
            setAdultCount(adultCount);
        }
    });

    function setAdultCount(adultCount){
        if(adultCount < 0){
            adultCount = 0;
        }
        $('#adults').html(adultCount);
    }


    $('#child-minus').click(()=>{
        if (childCount < 0){
            childCount = 0;
            setChildCount(childCount);
        } else {
            childCount = childCount - 1;
            setChildCount(childCount);
        }
    });

    $('#child-plus').click(()=>{
        if (childCount < 0){
            childCount = 0;
            setChildCount(childCount);
        } else {
            childCount = childCount + 1;
            setChildCount(childCount);
        }
    });

    function setChildCount(childCount){
        if(childCount < 0){
            childCount = 0;
        }
        $('#children').html(childCount);
    }
    
    

  
    

});