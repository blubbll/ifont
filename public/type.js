{
  //©by Blubbll
  const $ = window.$;

  const apply = () => {
    const that = apply;
    if ($.fontCount === Object.keys($.fonts).length && $.Map.size){
      //contruct options gui
      for (let [k, v] of $.Map) {
        $("select#font").append(
          `<option value="${k}">${`${k.charAt(0).toUpperCase()}${k.slice(
            1
          )}`}</option>`
        );
      }
    }
    else setTimeout(that, 599);
  };
  apply();

  $.update = _ => {
    let transformed;
    //requested font
    const reqFont = $("#font").val();

    //simple transformer :3
    const transform = o => (
      $.Map.get(reqFont).forEach((e, n) => {
        o = o.replace(new RegExp(n, "g"), e);
      }),
      o
    );

    //transform
    transformed = transform($("input[name=in]").val());

    //set transformed result
    $("input[name=out]").val(transformed);
  };
}
