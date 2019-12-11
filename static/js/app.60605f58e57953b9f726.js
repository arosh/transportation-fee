webpackJsonp([1,2],[function(e,t,o){o(7);var a=o(11)(o(3),o(12),"data-v-52aa5f48",null);e.exports=a.exports},,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(5),s=o.n(a);t.default={data:function(){return{basicFee:8750,expressFee:4870,buyTwoWayTicket:!0,useTwoWayDiscount:!1,useStudentDiscount:!1,twoWayDiscountCheck1:!1,twoWayDiscountCheck2:!1,studentDiscountCheck1:!1,studentDiscountCheck2:!1,studentDiscountCheck3:!1}},watch:{buyTwoWayTicket:function(){this.buyTwoWayTicket===!1&&(this.useTwoWayDiscount=!1)},useTwoWayDiscount:function(){this.useTwoWayDiscount===!1&&(this.twoWayDiscountCheck1=!1,this.twoWayDiscountCheck2=!1)},useStudentDiscount:function(){this.useStudentDiscount===!1&&(this.studentDiscountCheck1=!1,this.studentDiscountCheck2=!1,this.studentDiscountCheck3=!1)}},computed:{showWarning:function(){return this.isTwoWayDiscountInvalid||this.isStudentDiscountInvalid},isTwoWayDiscountInvalid:function(){return this.useTwoWayDiscount&&!(this.twoWayDiscountCheck1&&this.twoWayDiscountCheck2)},isStudentDiscountInvalid:function(){return this.useStudentDiscount&&!(this.studentDiscountCheck1&&this.studentDiscountCheck2&&this.studentDiscountCheck3)},formula:function(){var e=this.basicFee.toString();return this.useTwoWayDiscount&&(e+=" * 0.9"),this.useStudentDiscount&&(e+=" * 0.8"),this.expressFee>0&&(e+=" + "+this.expressFee.toString()),e="floor10("+e+")",this.buyTwoWayTicket&&(e+=" * 2"),e},amount:function(){var e=this.basicFee;return this.useTwoWayDiscount&&(e*=.9),this.useStudentDiscount&&(e*=.8),this.expressFee>0&&(e+=this.expressFee),e=this.floor10(e),this.buyTwoWayTicket&&(e*=2),s.a.format(e,{locale:"ja-JP"})}},methods:{floor10:function(e){return 10*Math.floor(e/10)}}}},function(e,t){e.exports={AED:{code:"AED",symbol:"د.إ.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},AFN:{code:"AFN",symbol:"؋",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},ALL:{code:"ALL",symbol:"Lek",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},AMD:{code:"AMD",symbol:"֏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},ANG:{code:"ANG",symbol:"ƒ",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},AOA:{code:"AOA",symbol:"Kz",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},ARS:{code:"ARS",symbol:"$",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},AUD:{code:"AUD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},AWG:{code:"AWG",symbol:"ƒ",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},AZN:{code:"AZN",symbol:"₼",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},BAM:{code:"BAM",symbol:"КМ",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},BBD:{code:"BBD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},BDT:{code:"BDT",symbol:"৳",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:0},BGN:{code:"BGN",symbol:"лв.",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},BHD:{code:"BHD",symbol:"د.ب.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:3},BIF:{code:"BIF",symbol:"FBu",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},BMD:{code:"BMD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},BND:{code:"BND",symbol:"$",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},BOB:{code:"BOB",symbol:"Bs",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},BRL:{code:"BRL",symbol:"R$",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},BSD:{code:"BSD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},BTC:{code:"BTC",symbol:"Ƀ",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},BTN:{code:"BTN",symbol:"Nu.",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:1},BWP:{code:"BWP",symbol:"P",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},BYR:{code:"BYR",symbol:"р.",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},BZD:{code:"BZD",symbol:"BZ$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},CAD:{code:"CAD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},CDF:{code:"CDF",symbol:"FC",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},CHF:{code:"CHF",symbol:"CHF",thousandsSeparator:"'",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},CLP:{code:"CLP",symbol:"$",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},CNY:{code:"CNY",symbol:"¥",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},COP:{code:"COP",symbol:"$",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},CRC:{code:"CRC",symbol:"₡",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},CUC:{code:"CUC",symbol:"CUC",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},CUP:{code:"CUP",symbol:"$MN",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},CVE:{code:"CVE",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},CZK:{code:"CZK",symbol:"Kč",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},DJF:{code:"DJF",symbol:"Fdj",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},DKK:{code:"DKK",symbol:"kr.",thousandsSeparator:"",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},DOP:{code:"DOP",symbol:"RD$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},DZD:{code:"DZD",symbol:"د.ج.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},EGP:{code:"EGP",symbol:"ج.م.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},ERN:{code:"ERN",symbol:"Nfk",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},ETB:{code:"ETB",symbol:"ETB",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},EUR:{code:"EUR",symbol:"€",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},FJD:{code:"FJD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},FKP:{code:"FKP",symbol:"£",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},GBP:{code:"GBP",symbol:"£",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},GEL:{code:"GEL",symbol:"Lari",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},GHS:{code:"GHS",symbol:"₵",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},GIP:{code:"GIP",symbol:"£",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},GMD:{code:"GMD",symbol:"D",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},GNF:{code:"GNF",symbol:"FG",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},GTQ:{code:"GTQ",symbol:"Q",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},GYD:{code:"GYD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},HKD:{code:"HKD",symbol:"HK$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},HNL:{code:"HNL",symbol:"L.",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},HRK:{code:"HRK",symbol:"kn",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},HTG:{code:"HTG",symbol:"G",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},HUF:{code:"HUF",symbol:"Ft",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},IDR:{code:"IDR",symbol:"Rp",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},ILS:{code:"ILS",symbol:"₪",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},INR:{code:"INR",symbol:"₹",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},IQD:{code:"IQD",symbol:"د.ع.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},IRR:{code:"IRR",symbol:"﷼",thousandsSeparator:",",decimalSeparator:"/",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},ISK:{code:"ISK",symbol:"kr.",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:0},JMD:{code:"JMD",symbol:"J$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},JOD:{code:"JOD",symbol:"د.ا.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:3},JPY:{code:"JPY",symbol:"¥",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},KES:{code:"KES",symbol:"S",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},KGS:{code:"KGS",symbol:"сом",thousandsSeparator:" ",decimalSeparator:"-",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},KHR:{code:"KHR",symbol:"៛",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},KMF:{code:"KMF",symbol:"CF",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},KPW:{code:"KPW",symbol:"₩",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},KRW:{code:"KRW",symbol:"₩",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},KWD:{code:"KWD",symbol:"د.ك.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:3},KYD:{code:"KYD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},KZT:{code:"KZT",symbol:"₸",thousandsSeparator:" ",decimalSeparator:"-",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},LAK:{code:"LAK",symbol:"₭",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},LBP:{code:"LBP",symbol:"ل.ل.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},LKR:{code:"LKR",symbol:"₨",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:0},LRD:{code:"LRD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},LSL:{code:"LSL",symbol:"M",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},LYD:{code:"LYD",symbol:"د.ل.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:3},MAD:{code:"MAD",symbol:"د.م.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},MDL:{code:"MDL",symbol:"lei",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},MGA:{code:"MGA",symbol:"Ar",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},MKD:{code:"MKD",symbol:"ден.",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},MMK:{code:"MMK",symbol:"K",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MNT:{code:"MNT",symbol:"₮",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MOP:{code:"MOP",symbol:"MOP$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MRO:{code:"MRO",symbol:"UM",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MTL:{code:"MTL",symbol:"₤",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MUR:{code:"MUR",symbol:"₨",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MVR:{code:"MVR",symbol:"MVR",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:1},MWK:{code:"MWK",symbol:"MK",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MXN:{code:"MXN",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MYR:{code:"MYR",symbol:"RM",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},MZN:{code:"MZN",symbol:"MT",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},NAD:{code:"NAD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},NGN:{code:"NGN",symbol:"₦",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},NIO:{code:"NIO",symbol:"C$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},NOK:{code:"NOK",symbol:"kr",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},NPR:{code:"NPR",symbol:"₨",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},NZD:{code:"NZD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},OMR:{code:"OMR",symbol:"﷼",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:3},PAB:{code:"PAB",symbol:"B/.",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},PEN:{code:"PEN",symbol:"S/.",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},PGK:{code:"PGK",symbol:"K",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},PHP:{code:"PHP",symbol:"₱",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},PKR:{code:"PKR",symbol:"₨",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},PLN:{code:"PLN",symbol:"zł",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},PYG:{code:"PYG",symbol:"₲",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},QAR:{code:"QAR",symbol:"﷼",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},RON:{code:"RON",symbol:"lei",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},RSD:{code:"RSD",symbol:"Дин.",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},RUB:{code:"RUB",symbol:"₽",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},RWF:{code:"RWF",symbol:"RWF",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},SAR:{code:"SAR",symbol:"﷼",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},SBD:{code:"SBD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SCR:{code:"SCR",symbol:"₨",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SDD:{code:"SDD",symbol:"LSd",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SDG:{code:"SDG",symbol:"£‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SEK:{code:"SEK",symbol:"kr",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},SGD:{code:"SGD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SHP:{code:"SHP",symbol:"£",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SLL:{code:"SLL",symbol:"Le",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SOS:{code:"SOS",symbol:"S",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SRD:{code:"SRD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},STD:{code:"STD",symbol:"Db",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SVC:{code:"SVC",symbol:"₡",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},SYP:{code:"SYP",symbol:"£",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},SZL:{code:"SZL",symbol:"E",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},THB:{code:"THB",symbol:"฿",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},TJS:{code:"TJS",symbol:"TJS",thousandsSeparator:" ",decimalSeparator:";",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},TMT:{code:"TMT",symbol:"m",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},TND:{code:"TND",symbol:"د.ت.‏",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:3},TOP:{code:"TOP",symbol:"T$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},TRY:{code:"TRY",symbol:"TL",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},TTD:{code:"TTD",symbol:"TT$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},TVD:{code:"TVD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},TWD:{code:"TWD",symbol:"NT$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},TZS:{code:"TZS",symbol:"TSh",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},UAH:{code:"UAH",symbol:"₴",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},UGX:{code:"UGX",symbol:"USh",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},USD:{code:"USD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},UYU:{code:"UYU",symbol:"$U",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},UZS:{code:"UZS",symbol:"сўм",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},VEB:{code:"VEB",symbol:"Bs.",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},VEF:{code:"VEF",symbol:"Bs. F.",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},VND:{code:"VND",symbol:"₫",thousandsSeparator:".",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!0,decimalDigits:1},VUV:{code:"VUV",symbol:"VT",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:0},WST:{code:"WST",symbol:"WS$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},XAF:{code:"XAF",symbol:"F",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},XCD:{code:"XCD",symbol:"$",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},XOF:{code:"XOF",symbol:"F",thousandsSeparator:" ",decimalSeparator:",",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},XPF:{code:"XPF",symbol:"F",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!1,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},YER:{code:"YER",symbol:"﷼",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},ZAR:{code:"ZAR",symbol:"R",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!0,decimalDigits:2},ZMW:{code:"ZMW",symbol:"ZK",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2},WON:{code:"WON",symbol:"₩",thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,decimalDigits:2}}},,function(e,t){e.exports={"de-AT":{thousandsSeparator:"."},"el-GR":{symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,thousandsSeparator:"."},"en-IE":{symbolOnLeft:!0,thousandsSeparator:","},"es-ES":{thousandsSeparator:"."},"it-IT":{symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,thousandsSeparator:"."},"nl-NL":{symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,thousandsSeparator:"."},"nl-BE":{symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,thousandsSeparator:"."},"ko-KR":{symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,thousandsSeparator:"."}}},function(e,t){},,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v("JRの割引計算機")]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("運賃（円）")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.basicFee,expression:"basicFee",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.basicFee},on:{input:function(t){t.target.composing||(e.basicFee=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",[e._v("特急料金（円）")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.expressFee,expression:"expressFee",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.expressFee},on:{input:function(t){t.target.composing||(e.expressFee=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.buyTwoWayTicket,expression:"buyTwoWayTicket"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.buyTwoWayTicket)?e._i(e.buyTwoWayTicket,null)>-1:e.buyTwoWayTicket},on:{__c:function(t){var o=e.buyTwoWayTicket,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.buyTwoWayTicket=o.concat(n)):m>-1&&(e.buyTwoWayTicket=o.slice(0,m).concat(o.slice(m+1)))}else e.buyTwoWayTicket=s}}}),e._v("\n      往復切符を買う\n    ")]),e._v(" "),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.buyTwoWayTicket,expression:"buyTwoWayTicket"}]},[o("li",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.useTwoWayDiscount,expression:"useTwoWayDiscount"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.useTwoWayDiscount)?e._i(e.useTwoWayDiscount,null)>-1:e.useTwoWayDiscount},on:{__c:function(t){var o=e.useTwoWayDiscount,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.useTwoWayDiscount=o.concat(n)):m>-1&&(e.useTwoWayDiscount=o.slice(0,m).concat(o.slice(m+1)))}else e.useTwoWayDiscount=s}}}),e._v(" "),o("span",{class:{"text-danger":e.isTwoWayDiscountInvalid}},[e._v("\n            往復割を使う\n          ")])]),e._v(" "),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.useTwoWayDiscount,expression:"useTwoWayDiscount"}]},[o("li",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.twoWayDiscountCheck1,expression:"twoWayDiscountCheck1"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.twoWayDiscountCheck1)?e._i(e.twoWayDiscountCheck1,null)>-1:e.twoWayDiscountCheck1},on:{__c:function(t){var o=e.twoWayDiscountCheck1,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.twoWayDiscountCheck1=o.concat(n)):m>-1&&(e.twoWayDiscountCheck1=o.slice(0,m).concat(o.slice(m+1)))}else e.twoWayDiscountCheck1=s}}}),e._v(" "),o("span",{class:{"text-danger":!e.twoWayDiscountCheck1}},[e._v("\n                片道601km以上である（東京ー大阪間は不可）\n              ")])])]),e._v(" "),o("li",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.twoWayDiscountCheck2,expression:"twoWayDiscountCheck2"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.twoWayDiscountCheck2)?e._i(e.twoWayDiscountCheck2,null)>-1:e.twoWayDiscountCheck2},on:{__c:function(t){var o=e.twoWayDiscountCheck2,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.twoWayDiscountCheck2=o.concat(n)):m>-1&&(e.twoWayDiscountCheck2=o.slice(0,m).concat(o.slice(m+1)))}else e.twoWayDiscountCheck2=s}}}),e._v(" "),o("span",{class:{"text-danger":!e.twoWayDiscountCheck2}},[e._v("\n                乗車券の有効日数を超える場合は往復切符を買うことができないことを知っている"),o("br"),e._v("\n                （"),o("a",{attrs:{href:"https://www.jreast.co.jp/kippu/04.html"}},[e._v("乗車券の有効期間｜きっぷのルール：JRおでかけネット")]),e._v("）\n              ")])])])])])])]),e._v(" "),o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.useStudentDiscount,expression:"useStudentDiscount"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.useStudentDiscount)?e._i(e.useStudentDiscount,null)>-1:e.useStudentDiscount},on:{__c:function(t){var o=e.useStudentDiscount,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.useStudentDiscount=o.concat(n)):m>-1&&(e.useStudentDiscount=o.slice(0,m).concat(o.slice(m+1)))}else e.useStudentDiscount=s}}}),e._v(" "),o("span",{class:{"text-danger":e.isStudentDiscountInvalid}},[e._v("\n        学割を使う\n      ")])]),e._v(" "),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.useStudentDiscount,expression:"useStudentDiscount"}]},[o("li",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.studentDiscountCheck1,expression:"studentDiscountCheck1"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.studentDiscountCheck1)?e._i(e.studentDiscountCheck1,null)>-1:e.studentDiscountCheck1},on:{__c:function(t){var o=e.studentDiscountCheck1,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.studentDiscountCheck1=o.concat(n)):m>-1&&(e.studentDiscountCheck1=o.slice(0,m).concat(o.slice(m+1)))}else e.studentDiscountCheck1=s}}}),e._v(" "),o("span",{class:{"text-danger":!e.studentDiscountCheck1}},[e._v("\n            片道101km以上である\n          ")])])]),e._v(" "),o("li",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.studentDiscountCheck2,expression:"studentDiscountCheck2"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.studentDiscountCheck2)?e._i(e.studentDiscountCheck2,null)>-1:e.studentDiscountCheck2},on:{__c:function(t){var o=e.studentDiscountCheck2,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.studentDiscountCheck2=o.concat(n)):m>-1&&(e.studentDiscountCheck2=o.slice(0,m).concat(o.slice(m+1)))}else e.studentDiscountCheck2=s}}}),e._v(" "),o("span",{class:{"text-danger":!e.studentDiscountCheck2}},[e._v("\n            乗車券の有効日数を超える場合は往復切符を買うことができないので，往路と復路で学割証が2枚必要なことを知っている"),o("br"),e._v("\n            （"),o("a",{attrs:{href:"https://www.jreast.co.jp/kippu/04.html"}},[e._v("乗車券の有効期間｜きっぷのルール：JRおでかけネット")]),e._v("）\n          ")])])]),e._v(" "),o("li",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.studentDiscountCheck3,expression:"studentDiscountCheck3"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.studentDiscountCheck3)?e._i(e.studentDiscountCheck3,null)>-1:e.studentDiscountCheck3},on:{__c:function(t){var o=e.studentDiscountCheck3,a=t.target,s=!!a.checked;if(Array.isArray(o)){var n=null,m=e._i(o,n);s?m<0&&(e.studentDiscountCheck3=o.concat(n)):m>-1&&(e.studentDiscountCheck3=o.slice(0,m).concat(o.slice(m+1)))}else e.studentDiscountCheck3=s}}}),e._v(" "),o("span",{class:{"text-danger":!e.studentDiscountCheck3}},[e._v("\n            大都市近郊区間では往復券は発売当日のみ有効で，日が変わる場合には往路と復路で学割証が2枚必要なことを知っている"),o("br"),e._v("  \n            （"),o("a",{attrs:{href:"https://www.jr-odekake.net/railroad/ticket/guide/02b.html#5"}},[e._v("大都市近郊区間内のみをご利用になる場合の特例｜きっぷのルール：JRおでかけネット")]),e._v("）\n          ")])])])])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showWarning,expression:"showWarning"}],staticClass:"alert alert-warning",attrs:{role:"alert"}},[e._v("チェックボックスを確認してください")]),e._v(" "),o("b",[e._v("結果")]),e._v(" "+e._s(e.formula)+" = "+e._s(e.amount)+"\n")])},staticRenderFns:[]}},,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(1),s=o(0),n=o.n(s);a.a.config.productionTip=!1,new a.a({el:"#vue-root",template:"<app></app>",components:{app:n.a}})}],[15]);
//# sourceMappingURL=app.60605f58e57953b9f726.js.map