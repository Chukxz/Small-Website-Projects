var verList = [];
var horList = [];

class Drawlines {

    lineMatrixHorizontal(R, num, ctx, canvas, color, lineWidth) { //the horizontal lines
        let hor = num / R;
        ctx.beginPath();
        ctx.moveTo(0, Math.round(canvas.height / hor));
        ctx.lineTo(Math.round(canvas.width), Math.round(canvas.height / hor));
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        horList[horList.length] = Math.round(canvas.height / hor);
        return horList
    }

    showHorlist() {
        return horList
    }


    lineMatrixVertical(R, num, ctx, canvas, color, lineWidth) { //the vertical lines
        var ver = num / R;
        ctx.beginPath();
        ctx.moveTo(Math.round(canvas.width / ver), 0);
        ctx.lineTo(Math.round(canvas.width / ver), Math.round(canvas.height));
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        verList[verList.length] = Math.round(canvas.width / ver);
        return verList


    }

    showVerList() {
        return verList
    }

    drawLines(num, ctx, canvas, color, lineWidth) { //draws the vertical and horizontal canvas lines
        verList.splice(0, verList.length)
        horList.splice(0, horList.length)

        for (let R = 0; R <= num; R++) {
            this.lineMatrixHorizontal(R, num, ctx, canvas, color, lineWidth);
            this.lineMatrixVertical(R, num, ctx, canvas, color, lineWidth);
        }
    }
}

let drawlines = new Drawlines

export { drawlines }