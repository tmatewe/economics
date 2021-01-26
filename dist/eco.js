let count = 0;

function calc(e) {
  if (e.target.value === "Point") {
    var qty1 = document.getElementById("qty1").value;
    var qty2 = document.getElementById("qty2").value;
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    var answer1 = document.getElementById("answer1");
    var qtyTop = -(qty1 - qty2) / qty1;
    var priceBottom = (price1 - price2) / price1;
    answer1.value = (qtyTop / priceBottom).toFixed(2);
    if (answer1.value < 1) {
      document.getElementById("type1").value = "Inelastic";
    } else if (answer1.value > 1) {
      document.getElementById("type1").value = "Elastic";
    } else {
      document.getElementById("type1").value = "Unitary";
    }
  } else if (e.target.value === "Arc") {
    console.log(e.target.innerHTML);
    var qty1 = document.getElementById("qty1").value;
    var qty2 = document.getElementById("qty2").value;
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    var answer2 = document.getElementById("answer2");
    var qtyBottom = (qty1 + qty2) / 2;
    var qtyTop = -(qty1 - qty2) / qtyBottom;
    var priceTop = (price1 + price2) / 2;
    var priceBottom = (price1 - price2) / priceTop;
    answer2.value = (qtyTop / priceBottom).toFixed(2);
    if (answer2.value < 1) {
      document.getElementById("type2").value = "Inelastic";
    } else if (answer2.value > 1) {
      document.getElementById("type2").value = "Elastic";
    } else {
      document.getElementById("type2").value = "Unitary";
    }
  } else if (e.target.value === "Gradient") {
    var qty1 = document.getElementById("qty1").value;
    var qty2 = document.getElementById("qty2").value;
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    gradient1.value = ((qty2 - qty1) / (price2 - price1)) * -(price1 / qty1);
    gradient2.value = ((qty2 - qty1) / (price2 - price1)) * -(price2 / qty2);
  } else if (e.target.value === "revenue1") {
    var qty1 = document.getElementById("qty1").value;
    var price1 = document.getElementById("price1").value;
    var rev1 = document.getElementById("rev1");
    rev1.value = qty1 * price1;
  } else if (e.target.value === "revenue2") {
    var qty2 = document.getElementById("qty2").value;
    var price2 = document.getElementById("price2").value;
    var rev2 = document.getElementById("rev2");
    rev2.value = qty2 * price2;
  } else if (e.target.value === "Income") {
    var qty2 = document.getElementById("qty2").value;
    var qty1 = document.getElementById("qty1").value;
    var income1 = document.getElementById("income1").value;
    var income2 = document.getElementById("income2").value;
    var income = document.getElementById("income");
    var comment = document.getElementById("comment");
    income.value =
      (qty2 - qty1) / qty1 / ((income2 - income1) / income1).toFixed(2);
    if (income.value > 0 && income.value <= 1) {
      comment.value = "Normal good-essential";
    } else if (income.value > 1) {
      comment.value = "Normal good-luxuary";
    } else if (income.value < 0) {
      comment.value = "inferior";
    }
  } else if (e.target.value === "Cross") {
    var qty1 = document.getElementById("qty1").value;
    var qty2 = document.getElementById("qty2").value;
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    var cross = document.getElementById("cross");
    var meaning = document.getElementById("meaning");
    cross.value =
      (qty2 - qty1) / qty1 / ((price2 - price1) / price1).toFixed(2);
    if (cross.value > 0) {
      meaning.value = "Subtitutes";
      meaning.style.white = "red";
    } else if (cross.value < 0) {
      meaning.value = "Compliments";
    }
  } else if (e.target.value === "Deflator1") {
    console.log("clicked");
    var norminal1 = document.getElementById("norminal1").value;
    var real1 = document.getElementById("real1").value;
    var deflator1 = document.getElementById("deflator1");
    deflator1.value = ((norminal1 / real1) * 100).toFixed(2);
  } else if (e.target.value === "Deflator2") {
    console.log("clicked");
    var norminal2 = document.getElementById("norminal2").value;
    var real2 = document.getElementById("real2").value;
    var deflator1 = document.getElementById("deflator1");
    deflator2.value = ((norminal2 / real2) * 100).toFixed(2);
  } else if (e.target.value === "Growth") {
    console.log("clicked");
    var norminal1 = document.getElementById("norminal1").value;
    var norminal2 = document.getElementById("norminal2").value;
    var real1 = document.getElementById("real1").value;
    var real2 = document.getElementById("real2").value;
    var growth = document.getElementById("growth");
    growth.value = (((real2 - real1) / real1) * 100).toFixed(2);
  } else if (e.target.value === "Inflation") {
    var norminal1 = document.getElementById("norminal1").value;
    var real1 = document.getElementById("real1").value;
    var norminal2 = document.getElementById("norminal2").value;
    var real2 = document.getElementById("real2").value;
    var def1 = (norminal1 / real1) * 100;
    var def2 = (norminal2 / real2) * 100;
    var inflation = document.getElementById("inflation");
    inflation.value = (((def2 - def1) / def1) * 100).toFixed(2);
  } else if (e.target.value === "Economic_profit") {
    console.log("clicked");
    var revenue = Number(document.getElementById("revenue").value);
    var implicit = Number(document.getElementById("implicit").value);
    var explicit = Number(document.getElementById("explicit").value);
    var ecoPro = document.getElementById("ecoPro");
    ecoPro.value = revenue - (explicit + implicit);
  } else if (e.target.value === "Accounting_profit") {
    console.log("clicked");
    var revenue = Number(document.getElementById("revenue").value);
    var implicit = Number(document.getElementById("implicit").value);
    var explicit = Number(document.getElementById("explicit").value);
    var accPro = document.getElementById("accPro");
    accPro.value = revenue - explicit;
  } else if (e.target.value === "Economic_costs") {
    console.log("clicked");
    var revenue = Number(document.getElementById("revenue").value);
    var implicit = Number(document.getElementById("implicit").value);
    var explicit = Number(document.getElementById("explicit").value);
    var ecoCosts = document.getElementById("ecoCosts");
    ecoCosts.value = implicit + explicit;
    // marginal utility
  } else if (e.target.value === "Click1") {
    console.log("clicked");
    var p1 = Number(document.getElementById("p1").value);
    var one1 = document.getElementById("one1");
    var one2 = document.getElementById("one2");
    var one3 = document.getElementById("one3");
    if (one2.value === "" && one1.value !== "") {
      one2.value = one1.value;
      one3.value = one1.value / p1;
    } else if (one1.value === "" && one2.value !== "") {
      one1.value = one2.value;
      one3.value = one1.value / p1;
    } else if (one1.value === "" && one2.value === "") {
      one1.value = p1 * Number(one3.value);
      one2.value = one1.value;
    }

    var two1 = document.getElementById("two1");
    var two2 = document.getElementById("two2");
    var two3 = document.getElementById("two3");
    if (two2.value === "" && two1.value !== "") {
      console.log("vvvvv");
      two2.value = Number(two1.value) + Number(one1.value);
      two3.value = two1.value / p1;
    } else if (two1.value === "" && two2.value !== "") {
      two1.value = Number(two2.value) - Number(one2.value);
      console.log("first");
      two3.value = two1.value / p1;
      console.log("second");
    } else if (two1.value === "" && two2.value === "") {
      console.log("last");
      two1.value = p1 * Number(two3.value);
      two2.value = Number(two1.value) + Number(one1.value);
    }
    var three1 = document.getElementById("three1");
    var three2 = document.getElementById("three2");
    var three3 = document.getElementById("three3");
    if (three1.value === "" && three2.value !== "") {
      three1.value = Number(three2.value) - Number(two2.value);
      three3.value = three1.value / p1;
    } else if (three2.value === "" && three1.value !== "") {
      three2.value = Number(two2.value) + Number(three1.value);
      three3.value = three1.value / p1;
    } else if (three2.value === "" && three1.value === "") {
      three1.value = p1 * Number(three3.value);
      three2.value = Number(two2.value) + Number(three1.value);
    }

    var four1 = document.getElementById("four1");
    var four2 = document.getElementById("four2");
    var four3 = document.getElementById("four3");
    if (four1.value === "" && four2.value !== "") {
      four1.value = Number(four2.value) - Number(three2.value);
      four3.value = four1.value / p1;
    } else if (four2.value === "" && four1.value !== "") {
      four2.value = Number(three2.value) + Number(four1.value);
      four3.value = four1.value / p1;
    } else if (four2.value === "" && four1.value === "") {
      four1.value = p1 * Number(four3.value);
      four2.value = Number(three2.value) + Number(four1.value);
    }
    var five1 = document.getElementById("five1");
    var five2 = document.getElementById("five2");
    var five3 = document.getElementById("five3");
    if (five1.value === "" && five2.value !== "") {
      five1.value = Number(five2.value) - Number(four2.value);
      five3.value = five1.value / p1;
    } else if (five2.value === "" && five1.value !== "") {
      five2.value = Number(four2.value) + Number(five1.value);
      five3.value = five1.value / p1;
    } else if (five2.value === "" && five1.value === "") {
      five1.value = p1 * Number(five3.value);
      five2.value = Number(four2.value) + Number(five1.value);
    }

    var six1 = document.getElementById("six1");
    var six2 = document.getElementById("six2");
    var six3 = document.getElementById("six3");
    if (six1.value === "" && six2.value !== "") {
      six1.value = Number(six2.value) - Number(five2.value);
      six3.value = six1.value / p1;
    } else if (six2.value === "" && six1.value !== "") {
      six2.value = Number(five2.value) + Number(six1.value);
      six3.value = six1.value / p1;
    } else if (six2.value === "" && six1.value === "") {
      six1.value = p1 * Number(six3.value);
      six2.value = Number(five2.value) + Number(six1.value);
    }
    var seven1 = document.getElementById("seven1");
    var seven2 = document.getElementById("seven2");
    var seven3 = document.getElementById("seven3");
    if (seven1.value === "" && seven2.value !== "") {
      seven1.value = Number(seven2.value) - Number(six2.value);
      seven3.value = seven1.value / p1;
    } else if (seven2.value === "" && seven1.value !== "") {
      seven2.value = Number(six2.value) + Number(seven1.value);
      seven3.value = seven1.value / p1;
    } else if (seven2.value === "" && seven1.value === "") {
      seven1.value = p1 * Number(seven3.value);
      seven2.value = Number(six2.value) + Number(seven1.value);
    }
    var eight1 = document.getElementById("eight1");
    var eight2 = document.getElementById("eight2");
    var eight3 = document.getElementById("eight3");
    if (eight1.value === "" && eight2.value !== "") {
      eight1.value = Number(eight2.value) - Number(seven2.value);
      eight3.value = eight1.value / p1;
    } else if (eight2.value === "" && eight1.value !== "") {
      eight2.value = Number(seven2.value) + Number(eight1.value);
      eight3.value = eight1.value / p1;
    } else if (eight2.value === "" && eight1.value === "") {
      eight1.value = p1 * Number(eight3.value);
      eight2.value = Number(seven2.value) + Number(eight1.value);
      eight3.value = eight1.value / p1;
    }

    var nine1 = document.getElementById("nine1");
    var nine2 = document.getElementById("nine2");
    var nine3 = document.getElementById("nine3");
    if (nine1.value === "" && nine2.value !== "") {
      nine1.value = Number(nine2.value) - Number(nine2.value);
      nine3.value = nine1.value / p1;
    } else if (nine2.value === "" && nine1.value !== "") {
      nine2.value = Number(eight2.value) + Number(nine1.value);
      nine3.value = nine1.value / p1;
    } else if (nine2.value === "" && nine1.value === "") {
      nine1.value = p1 * Number(nine3.value);
      nine2.value = Number(eight2.value) + Number(nine1.value);
      nine3.value = nine1.value / p1;
    }
    var ten1 = document.getElementById("ten1");
    var ten2 = document.getElementById("ten2");
    var ten3 = document.getElementById("ten3");
    if (ten1.value === "" && ten2.value !== "") {
      ten1.value = Number(ten2.value) - Number(ten2.value);
      ten3.value = ten1.value / p1;
    } else if (ten2.value === "" && ten1.value !== "") {
      ten2.value = Number(nine2.value) + Number(ten1.value);
      ten3.value = ten1.value / p1;
    } else if (ten2.value === "" && ten1.value === "") {
      ten1.value = p1 * Number(ten3.value);
      ten2.value = Number(nine2.value) + Number(ten1.value);
      ten3.value = ten1.value / p1;
    }
    //click number 2
  } else if (e.target.value === "Click2") {
    console.log("clicked");
    var p2 = Number(document.getElementById("p2").value);
    var on1 = document.getElementById("on1");
    var on2 = document.getElementById("on2");
    var on3 = document.getElementById("on3");
    if (on2.value === "" && on1.value !== "") {
      on2.value = on1.value;
      on3.value = on1.value / p2;
    } else if (on1.value === "" && on2.value !== "") {
      on1.value = on2.value;
      on3.value = on1.value / p2;
    } else if (on1.value === "" && on2.value === "") {
      on1.value = p2 * Number(on3.value);
      on2.value = on1.value;
    }

    var tw1 = document.getElementById("tw1");
    var tw2 = document.getElementById("tw2");
    var tw3 = document.getElementById("tw3");
    if (tw2.value === "" && tw1.value !== "") {
      console.log("vvvvv");
      tw2.value = Number(tw1.value) + Number(on1.value);
      tw3.value = tw1.value / p2;
    } else if (tw1.value === "" && tw2.value !== "") {
      tw1.value = Number(tw2.value) - Number(on2.value);
      console.log("first");
      tw3.value = tw1.value / p2;
      console.log("second");
    } else if (tw1.value === "" && tw2.value === "") {
      console.log("last");
      tw1.value = p2 * Number(tw3.value);
      tw2.value = Number(tw1.value) + Number(on1.value);
    }
    var thre1 = document.getElementById("thre1");
    var thre2 = document.getElementById("thre2");
    var thre3 = document.getElementById("thre3");
    if (thre1.value === "" && thre2.value !== "") {
      thre1.value = Number(thre2.value) - Number(tw2.value);
      thre3.value = thre1.value / p2;
    } else if (thre2.value === "" && thre1.value !== "") {
      thre2.value = Number(tw2.value) + Number(thre1.value);
      thre3.value = thre1.value / p2;
    } else if (thre2.value === "" && thre1.value === "") {
      thre1.value = p2 * Number(thre3.value);
      thre2.value = Number(tw2.value) + Number(thre1.value);
    }

    var fou1 = document.getElementById("fou1");
    var fou2 = document.getElementById("fou2");
    var fou3 = document.getElementById("fou3");
    if (fou1.value === "" && fou2.value !== "") {
      fou1.value = Number(fou2.value) - Number(thre2.value);
      fou3.value = fou1.value / p2;
    } else if (fou2.value === "" && fou1.value !== "") {
      fou2.value = Number(thre2.value) + Number(fou1.value);
      fou3.value = fou1.value / p2;
    } else if (fou2.value === "" && fou1.value === "") {
      fou1.value = p1 * Number(fou3.value);
      fou2.value = Number(thre2.value) + Number(fou1.value);
    }
    var fiv1 = document.getElementById("fiv1");
    var fiv2 = document.getElementById("fiv2");
    var fiv3 = document.getElementById("fiv3");
    if (fiv1.value === "" && fiv2.value !== "") {
      fiv1.value = Number(fiv2.value) - Number(fou2.value);
      fiv3.value = fiv1.value / p2;
    } else if (fiv2.value === "" && fiv1.value !== "") {
      fiv2.value = Number(fou2.value) + Number(fiv1.value);
      fiv3.value = fiv1.value / p2;
    } else if (fiv2.value === "" && fiv1.value === "") {
      fiv1.value = p2 * Number(fiv3.value);
      fiv2.value = Number(fou2.value) + Number(fiv1.value);
    }

    var si1 = document.getElementById("si1");
    var si2 = document.getElementById("si2");
    var si3 = document.getElementById("si3");
    if (si1.value === "" && si2.value !== "") {
      si1.value = Number(si2.value) - Number(fiv2.value);
      si3.value = si1.value / p2;
    } else if (si2.value === "" && si1.value !== "") {
      si2.value = Number(fiv2.value) + Number(si1.value);
      si3.value = si1.value / p2;
    } else if (si2.value === "" && si1.value === "") {
      si1.value = p2 * Number(si3.value);
      si2.value = Number(fiv2.value) + Number(si1.value);
    }
    var seve1 = document.getElementById("seve1");
    var seve2 = document.getElementById("seve2");
    var seve3 = document.getElementById("seve3");
    if (seve1.value === "" && seve2.value !== "") {
      seve1.value = Number(seve2.value) - Number(si2.value);
      seve3.value = seve1.value / p2;
    } else if (seve2.value === "" && seve1.value !== "") {
      seve2.value = Number(si2.value) + Number(seve1.value);
      seve3.value = seve1.value / p2;
    } else if (seve2.value === "" && seve1.value === "") {
      seve1.value = p2 * Number(seve3.value);
      seve2.value = Number(si2.value) + Number(seve1.value);
    }
    var eigh1 = document.getElementById("eigh1");
    var eigh2 = document.getElementById("eigh2");
    var eigh3 = document.getElementById("eigh3");
    if (eigh1.value === "" && eigh2.value !== "") {
      eigh1.value = Number(eigh2.value) - Number(seve2.value);
      eigh3.value = eigh1.value / p2;
    } else if (eigh2.value === "" && eigh1.value !== "") {
      eigh2.value = Number(seve2.value) + Number(eigh1.value);
      eigh3.value = eigh1.value / p2;
    } else if (eigh2.value === "" && eigh1.value === "") {
      eigh1.value = p2 * Number(eigh3.value);
      eigh2.value = Number(seve2.value) + Number(eigh1.value);
      eigh3.value = Number(eigh1.value) / p2;
    }
    var nin1 = document.getElementById("nin1");
    var nin2 = document.getElementById("nin2");
    var nin3 = document.getElementById("nin3");
    if (nin1.value === "" && nin2.value !== "") {
      nin1.value = Number(nin2.value) - Number(eigh2.value);
      nin3.value = nin1.value / p2;
      console.log("here");
    } else if (nin2.value === "" && nin1.value !== "") {
      console.log("here");
      nin2.value = Number(eigh2.value) + Number(nin1.value);
      nin3.value = nin1.value / p2;
    } else if (nin2.value === "" && nin1.value === "") {
      nin1.value = p2 * Number(nin3.value);
      nin2.value = Number(eigh2.value) + Number(nin1.value);
      nin3.value = nin1.value / p1;
      console.log("here");
    }
    var te1 = document.getElementById("te1");
    var te2 = document.getElementById("te2");
    var te3 = document.getElementById("te3");
    if (te1.value === "" && te2.value !== "") {
      te1.value = Number(te2.value) - Number(te2.value);
      te3.value = te1.value / p2;
    } else if (te2.value === "" && te1.value !== "") {
      te2.value = Number(nin2.value) + Number(te1.value);
      te3.value = te1.value / p2;
    } else if (te2.value === "" && te1.value === "") {
      te1.value = p1 * Number(ten2.value);
      te2.value = Number(nin2.value) + Number(te1.value);
      te3.value = te1.value / p2;
    }
    //click number 3
  } else if (e.target.value === "Click3") {
    console.log("clicked");
    var p3 = Number(document.getElementById("p3").value);
    var o1 = document.getElementById("o1");
    var o2 = document.getElementById("o2");
    var o3 = document.getElementById("o3");
    if (o2.value === "" && o1.value !== "") {
      o2.value = o1.value;
      o3.value = o1.value / p3;
    } else if (o1.value === "" && o2.value !== "") {
      o1.value = o2.value;
      o3.value = o1.value / p3;
    } else if (o1.value === "" && o2.value === "") {
      o1.value = p3 * Number(o3.value);
      o2.value = o1.value;
    }

    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    if (t2.value === "" && t1.value !== "") {
      console.log("vvvvv");
      t2.value = Number(t1.value) + Number(o1.value);
      t3.value = t1.value / p3;
    } else if (t1.value === "" && t2.value !== "") {
      t1.value = Number(t2.value) - Number(o2.value);
      console.log("first");
      t3.value = t1.value / p3;
      console.log("second");
    } else if (t1.value === "" && t2.value === "") {
      console.log("last");
      t1.value = p3 * Number(t3.value);
      t2.value = Number(t1.value) + Number(o1.value);
    }
    var thr1 = document.getElementById("thr1");
    var thr2 = document.getElementById("thr2");
    var thr3 = document.getElementById("thr3");
    if (thr1.value === "" && thr2.value !== "") {
      thr1.value = Number(thr2.value) - Number(t2.value);
      thr3.value = thr1.value / p3;
    } else if (thr2.value === "" && thr1.value !== "") {
      thr2.value = Number(t2.value) + Number(thr1.value);
      thr3.value = thr1.value / p3;
    } else if (thr2.value === "" && thr1.value === "") {
      thr1.value = p3 * Number(thr3.value);
      thr2.value = Number(t2.value) + Number(thr1.value);
    }

    var fo1 = document.getElementById("fo1");
    var fo2 = document.getElementById("fo2");
    var fo3 = document.getElementById("fo3");
    if (fo1.value === "" && fo2.value !== "") {
      fo1.value = Number(fo2.value) - Number(thr2.value);
      fo3.value = fo1.value / p3;
    } else if (fo2.value === "" && fo1.value !== "") {
      fo2.value = Number(thr2.value) + Number(fo1.value);
      fo3.value = fo1.value / p3;
    } else if (fo2.value === "" && fo1.value === "") {
      fo1.value = p3 * Number(fo3.value);
      fo2.value = Number(thr2.value) + Number(fo1.value);
    }
    var fi1 = document.getElementById("fi1");
    var fi2 = document.getElementById("fi2");
    var fi3 = document.getElementById("fi3");
    if (fi1.value === "" && fi2.value !== "") {
      fi1.value = Number(fi2.value) - Number(fo2.value);
      fi3.value = fi1.value / p3;
    } else if (fi2.value === "" && fi1.value !== "") {
      fi2.value = Number(fo2.value) + Number(fi1.value);
      fi3.value = fi1.value / p3;
    } else if (fi2.value === "" && fi1.value === "") {
      fi1.value = p3 * Number(fi3.value);
      fi2.value = Number(fo2.value) + Number(fi1.value);
    }

    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    if (s1.value === "" && s2.value !== "") {
      s1.value = Number(s2.value) - Number(fi2.value);
      s3.value = s1.value / p3;
    } else if (s2.value === "" && s1.value !== "") {
      s2.value = Number(fi2.value) + Number(s1.value);
      s3.value = s1.value / p3;
    } else if (s2.value === "" && s1.value === "") {
      s1.value = p3 * Number(s3.value);
      s2.value = Number(fi2.value) + Number(s1.value);
    }
    var sev1 = document.getElementById("sev1");
    var sev2 = document.getElementById("sev2");
    var sev3 = document.getElementById("sev3");
    if (sev1.value === "" && sev2.value !== "") {
      sev1.value = Number(sev2.value) - Number(s2.value);
      sev3.value = sev1.value / p3;
    } else if (sev2.value === "" && sev1.value !== "") {
      sev2.value = Number(s2.value) + Number(sev1.value);
      sev3.value = sev1.value / p3;
    } else if (sev2.value === "" && sev1.value === "") {
      sev1.value = p3 * Number(sev3.value);
      sev2.value = Number(s2.value) + Number(sev1.value);
    }
    var eig1 = document.getElementById("eig1");
    var eig2 = document.getElementById("eig2");
    var eig3 = document.getElementById("eig3");
    if (eig1.value === "" && eig2.value !== "") {
      eig1.value = Number(eig2.value) - Number(sev2.value);
      eig3.value = eig1.value / p1;
    } else if (eig2.value === "" && eig1.value !== "") {
      eig2.value = Number(sev2.value) + Number(eig1.value);
      eig3.value = eig1.value / p3;
    } else if (eig2.value === "" && eig1.value === "") {
      eig1.value = p3 * Number(eig3.value);
      eig2.value = Number(sev2.value) + Number(eig1.value);
      eigh.value = Number(eigh1.value) / p3;
    }
    var ni1 = document.getElementById("ni1");
    var ni2 = document.getElementById("ni2");
    var ni3 = document.getElementById("ni3");
    if (ni1.value === "" && ni2.value !== "") {
      ni1.value = Number(ni2.value) - Number(ni2.value);
      ni3.value = ni1.value / p3;
    } else if (ni2.value === "" && ni1.value !== "") {
      ni2.value = Number(eig2.value) + Number(ni1.value);
      ni3.value = ni1.value / p3;
    } else if (ni2.value === "" && ni1.value === "") {
      ni1.value = p1 * Number(ni3.value);
      ni2.value = Number(eig2.value) + Number(ni1.value);
      ni3.value = ni1.value / p3;
    }
    var tte1 = document.getElementById("tte1");
    var tte2 = document.getElementById("tte2");
    var tte3 = document.getElementById("tte3");
    if (tte1.value === "" && tte2.value !== "") {
      tte1.value = Number(tte2.value) - Number(tte2.value);
      tte3.value = tte1.value / p3;
    } else if (tte2.value === "" && tte1.value !== "") {
      tte2.value = Number(ni2.value) + Number(tte1.value);
      tte3.value = tte1.value / p3;
    } else if (tte2.value === "" && tte1.value === "") {
      tte1.value = p3 * Number(tte3.value);
      tte2.value = Number(ni2.value) + Number(tte1.value);
      tte3.value = tte1.value / p3;
    }
  } else if (e.target.value === "Click4") {
    // //first marginal utility

    var tuOne1 = document.getElementById("one2").value;
    var tuOne2 = document.getElementById("two2").value;
    var tuOne3 = document.getElementById("three2").value;
    var tuOne4 = document.getElementById("four2").value;
    var tuOne5 = document.getElementById("five2").value;
    var tuOne6 = document.getElementById("six2").value;
    var tuOne7 = document.getElementById("seven2").value;
    var tuOne8 = document.getElementById("eight2").value;
    var tuOne9 = document.getElementById("nine2").value;
    var tuOne10 = document.getElementById("ten2").value;

    var firstTU = [
      tuOne1,
      tuOne2,
      tuOne3,
      tuOne4,
      tuOne5,
      tuOne6,
      tuOne7,
      tuOne8,
      tuOne9,
      tuOne10,
    ];

    console.log(firstTU);

    var wmuOne1 = document.getElementById("one3").value;
    var wmuOne2 = document.getElementById("two3").value;
    var wmuOne3 = document.getElementById("three3").value;
    var wmuOne4 = document.getElementById("four3").value;
    var wmuOne5 = document.getElementById("five3").value;
    var wmuOne6 = document.getElementById("six3").value;
    var wmuOne7 = document.getElementById("seven3").value;
    var wmuOne8 = document.getElementById("eight3").value;
    var wmuOne9 = document.getElementById("nine3").value;
    var wmuOne10 = document.getElementById("ten3").value;
    var firstWMU = [
      wmuOne1,
      wmuOne2,
      wmuOne3,
      wmuOne4,
      wmuOne5,
      wmuOne6,
      wmuOne7,
      wmuOne8,
      wmuOne9,
      wmuOne10,
    ];

    //second weighted marginal utility
    var tuTwo1 = document.getElementById("on2").value;
    var tuTwo2 = document.getElementById("tw2").value;
    var tuTwo3 = document.getElementById("thre2").value;
    var tuTwo4 = document.getElementById("fou2").value;
    var tuTwo5 = document.getElementById("fiv2").value;
    var tuTwo6 = document.getElementById("si2").value;
    var tuTwo7 = document.getElementById("seve2").value;
    var tuTwo8 = document.getElementById("eigh2").value;
    var tuTwo9 = document.getElementById("nin2").value;
    var tuTwo10 = document.getElementById("te2").value;

    var secondTU = [
      tuTwo1,
      tuTwo2,
      tuTwo3,
      tuTwo4,
      tuTwo5,
      tuTwo6,
      tuTwo7,
      tuTwo8,
      tuTwo9,
      tuTwo10,
    ];
    console.log(secondTU);

    var wmuTwo1 = document.getElementById("on3").value;
    var wmuTwo2 = document.getElementById("tw3").value;
    var wmuTwo3 = document.getElementById("thre3").value;
    var wmuTwo4 = document.getElementById("fou3").value;
    var wmuTwo5 = document.getElementById("fiv3").value;
    var wmuTwo6 = document.getElementById("si3").value;
    var wmuTwo7 = document.getElementById("seve3").value;
    var wmuTwo8 = document.getElementById("eigh3").value;
    var wmuTwo9 = document.getElementById("nin3").value;
    var wmuTwo10 = document.getElementById("te3").value;

    var secondWMU = [
      wmuTwo1,
      wmuTwo2,
      wmuTwo3,
      wmuTwo4,
      wmuTwo5,
      wmuTwo6,
      wmuTwo7,
      wmuTwo8,
      wmuTwo9,
      wmuTwo10,
    ];

    console.log(secondWMU);

    //third weighted marginal utility
    var tuThree1 = document.getElementById("o2").value;
    var tuThree2 = document.getElementById("t2").value;
    var tuThree3 = document.getElementById("thr2").value;
    var tuThree4 = document.getElementById("fo2").value;
    var tuThree5 = document.getElementById("fi2").value;
    var tuThree6 = document.getElementById("s2").value;
    var tuThree7 = document.getElementById("sev2").value;
    var tuThree8 = document.getElementById("eig2").value;
    var tuThree9 = document.getElementById("ni2").value;
    var tuThree10 = document.getElementById("tte2").value;

    var thirdTU = [
      tuThree1,
      tuThree2,
      tuThree3,
      tuThree4,
      tuThree5,
      tuThree6,
      tuThree7,
      tuThree8,
      tuThree9,
      tuThree10,
    ];
    console.log(tuThree10);
    console.log(thirdTU);
    var wmuThree1 = document.getElementById("o3").value;
    var wmuThree2 = document.getElementById("t3").value;
    var wmuThree3 = document.getElementById("thr3").value;
    var wmuThree4 = document.getElementById("fo3").value;
    var wmuThree5 = document.getElementById("fi3").value;
    var wmuThree6 = document.getElementById("s3").value;
    var wmuThree7 = document.getElementById("sev3").value;
    var wmuThree8 = document.getElementById("eig3").value;
    var wmuThree9 = document.getElementById("ni3").value;
    var wmuThree10 = document.getElementById("tte3").value;

    var thirdWMU = [
      wmuThree1,
      wmuThree2,
      wmuThree3,
      wmuThree4,
      wmuThree5,
      wmuThree6,
      wmuThree7,
      wmuThree8,
      wmuThree9,
      wmuThree10,
    ];

    //Finding common factor
    let arrOfMwu = [
      wmuOne1,
      wmuOne2,
      wmuOne3,
      wmuOne4,
      wmuOne5,
      wmuOne6,
      wmuOne7,
      wmuOne8,
      wmuOne9,
      wmuOne10,
      wmuTwo1,
      wmuTwo2,
      wmuTwo3,
      wmuTwo4,
      wmuTwo5,
      wmuTwo6,
      wmuTwo7,
      wmuTwo8,
      wmuTwo9,
      wmuTwo10,
      wmuThree1,
      wmuThree2,
      wmuThree3,
      wmuThree4,
      wmuThree5,
      wmuThree6,
      wmuThree7,
      wmuThree8,
      wmuThree9,
      wmuThree10,
    ];
    console.log(arrOfMwu);

    //finding dublicates
    function find_duplicate_in_array(arra1) {
      const object = {};
      const result = [];

      arra1.forEach((item) => {
        if (!object[item]) object[item] = 0;
        object[item] += 1;
      });

      for (const prop in object) {
        if (object[prop] >= 2) {
          result.push(prop);
        }
      }

      return result;
    }

    let arrOfCommonFactors = find_duplicate_in_array(arrOfMwu);
    console.log(arrOfCommonFactors);

    let commonFactor = document.getElementById("commonFactor");

    if (count == 0) {
      commonFactor.value = arrOfCommonFactors[0];
    } else if (count == 1) {
      commonFactor.value = arrOfCommonFactors[1];
    } else if (count == 2) {
      commonFactor.value = arrOfCommonFactors[2];
    } else if (count == 3) {
      commonFactor.value = arrOfCommonFactors[3];
    } else if (count == 4) {
      commonFactor.value = arrOfCommonFactors[4];
    } else if (count == 5) {
      commonFactor.value = arrOfCommonFactors[5];
    }

    console.log(thirdWMU);
    ////Final answer

    console.log(amountToSpent.value);

    if (amountToSpent.value == 0) {
      alert("Please enter the budget");
    } else {
      count++;
      firstWMU.forEach(function (weight, index) {
        if (weight == commonFactor.value) {
          console.log(weight);
          document.getElementById("qtyPro1").value = index + 1;
          console.log(index);
          document.getElementById("firstTU").value = firstTU[index];
        }
      });

      secondWMU.forEach(function (weight, index) {
        if (weight == commonFactor.value) {
          console.log(weight);
          document.getElementById("qtyPro2").value = index + 1;
          console.log(index);
          document.getElementById("secondTU").value = secondTU[index];
        }
      });

      thirdWMU.forEach(function (weight, index) {
        if (weight == commonFactor.value) {
          console.log(weight);
          document.getElementById("qtyPro3").value = index + 1;
          console.log(index);
          document.getElementById("thirdTU").value = thirdTU[index];
          console.log(thirdTU[index]);
        }
      });
      document.getElementById("final-utility").value =
        Number(document.getElementById("thirdTU").value) +
        Number(document.getElementById("secondTU").value) +
        Number(document.getElementById("firstTU").value);

      var p1 = Number(document.getElementById("p1").value);
      var p2 = Number(document.getElementById("p2").value);
      var p3 = Number(document.getElementById("p3").value);
      var qtyPro1 = Number(document.getElementById("qtyPro1").value);
      var qtyPro2 = Number(document.getElementById("qtyPro2").value);
      var qtyPro3 = Number(document.getElementById("qtyPro3").value);
      pricePro1.value = p1;
      pricePro2.value = p2;
      pricePro3.value = p3;
      budgetPro1.value = qtyPro1 * p1;
      budgetPro2.value = qtyPro2 * p2;
      budgetPro3.value = qtyPro3 * p3;
      totalBudget.value =
        Number(budgetPro1.value) +
        Number(budgetPro2.value) +
        Number(budgetPro3.value);
      if (Number(amountToSpent.value) === Number(totalBudget.value)) {
        document.getElementById("moreInfo").innerText =
          "This is the equilibrium";
        document.getElementById("moreInfo").style.color = "green";
        e.target.style.display = "none";
      } else {
        document.getElementById("moreInfo").innerText =
          "This is not the equilibrium";
        document.getElementById("moreInfo").style.color = "red";
      }
    }
  }
}
var buttons = document.getElementsByClassName("btn");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calc);
}
