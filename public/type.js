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
        const transform = o => {
            console.log($("input[name=out]").text() + $.Map.get(reqFont).get(o.slice(-1)))
            $("input[name=out]").val($("input[name=out]").val() + $.Map.get(reqFont).get(o.slice(-1)));
        };

        //transform
        transformed = transform($("input[name=in]").val());

        //set transformed result
        $("input[name=out]").val(transformed);
    };
}