/**
 * Created by Wikiprofly on 2015/4/2.
 * 软件测试作业，输入日期，输出后天的日期
 */

function theDayAfterTomorrow() {
    var date = document.getElementsByTagName("input");
    if (isCorrectInput(date)) {
        switch (date[2].value) {
            case "27":
                for27();
                break;
            case "28":
                for28();
                break;
            case "29":
                for29();
                break;
            case "30":
                for30();
                break;
            case "31":
                for31();
                break;
            default:
                date[2].value = new Number(date[2].value) + 2;
        }
        document.getElementById("output").innerHTML = "后天是" + date[0].value + "年" +
        date[1].value + "月" + date[2].value + "日";
    } else
        alert("你的输入有误！");

    /**
     * 输入日期错误检测
     */
    function isCorrectInput() {
        if (date[0].value < 0)
            return false;
        else if (date[1].value > 12 || date[1].value < 1)
            return false;
        else if (date[2].value > 31 || date[2].value < 1)
            return false;
        else if (date[1] == 2 && date[2].value > 28 && !isLeapYear(date[0].value))
            return false;
        else if (date[1] == 2 && date[2].value > 29)
            return false;
        else if (date[2].value > 30 && !isBigMonth(date[1].value))
            return false;
        return true;
    }

    /**
     * 判断是否为闰年
     */

    function isLeapYear(year) {
        return (!(year % 400) || !(year % 4) && year % 100) ? true : false
    }

    /**
     * 判断是否为大月
     */
    function isBigMonth(month) {
        return month != "4" && month != "6" && month != "9" && month != "11" ? true : false
    }

    function for27() {
        if (date[1].value == 2 && !isLeapYear(date[0].value)) {
            date[2].value = 1;
            date[1].value++;
        } else
            date[2].value = new Number(date[2].value) + 2;
    }

    function for28() {
        if (date[1].value == 2)
            if (isLeapYear(date[0].value)) {
                date[2].value = 1;
                date[1].value++;
            } else {
                date[2].value = 2;
                date[1].value++;
            }
        else
            date[2].value = 30;
    }

    function for29() {
        if (date[1].value == 2)
            if (isLeapYear(date[0].value)) {
                date[2].value = 2;
                date[1].value++;
            } else /*空语句*/;
        else if (isBigMonth(date[1].value))
            date[2].value = 31;
        else {
            date[2].value = 1;
            date[1].value++;
        }
    }

    function for30() {
        if (isBigMonth(date[1].value)) {
            date[2].value = 1;
            if (date[1].value == "12") {
                date[0].value++;
                date[1].value = 1;
            } else
                date[1].value++;
        } else {
            date[2].value = 2;
            date[1].value++;
        }
    }

    function for31() {
        if (date[1].value == "12") {
            date[0].value++;
            date[1].value = 1;
            date[2].value = 2;
        } else {
            date[1].value++;
            date[2].value = 2;
        }
    }
}
