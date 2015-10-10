var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var px = new Px(xhr.responseText);
    }
};
 
xhr.open('GET', 'http://px.hagstofa.is/pxis/api/v1/is/Umhverfi/hitastig/UMH11110.px');
xhr.send();
