function copy(e) {
    let $el = document.createElement("input");
    let $parent = e.parentElement.parentElement;
    let $lbl = $parent.firstElementChild;
    $el.setAttribute("value", $lbl.innerText);
    document.body.appendChild($el);
    $el.select();
    document.execCommand("copy");
    document.body.removeChild($el);
    let $copyText = $parent.parentElement.querySelector('.copy-text');
    $copyText.innerHTML = '<label>copied!</label>';
    setTimeout(function () {
        $copyText.innerHTML = '';
    }, 5000);
}
