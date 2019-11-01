{
  //©by Blubbll
  const $ = window.$;

  //contruct options gui
  for (let [k, v] of $.Map) {
    $("select#font").append(
      `<option value="${k}">${`${k.charAt(0).toUpperCase()}${k.slice(
        1
      )}`}</option>`
    );
  }

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
