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
        var event = this;
        if (_) {
            $("input[name=out]").val("");
            return;
        }
        let transformed;
        //requested font
        const reqFont = $("#font").val();
          var e = event;
          var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        //simple transformer :3
        const transform = o => {
            var regex = new RegExp("^[a-zA-Z0-9]+$");
            if (regex.test(str)) {
                $("input[name=out]").val(($("input[name=out]").val() || "") + ($.Map.get(reqFont).get(o) || ""));
            } else $("input[name=out]").val(($("input[name=out]").val() || "") + o);
        };

        //transform
        transformed = transform($("input[name=in]").val().slice(-1));

        //set transformed result
        $("input[name=out]").val(transformed);
    };
}