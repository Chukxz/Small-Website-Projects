import { num, ctx, canvas, color, horList, verList } from './Memory game.js'

class LineDraw {

    lineMatrixHorizontal(R) { //the horizontal lines
        let hor = num / R;
        ctx.beginPath();
        ctx.moveTo(0, Math.round(canvas.height / hor));
        ctx.lineTo(Math.round(canvas.width), Math.round(canvas.height / hor));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        horList[horList.length] = Math.round(canvas.height / hor);
        return horList
    }

    lineMatrixVertical(R) { //the vertical lines
        let ver = num / R;
        ctx.beginPath();
        ctx.moveTo(Math.round(canvas.width / ver), 0);
        ctx.lineTo(Math.round(canvas.width / ver), Math.round(canvas.height));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        verList[verList.length] = Math.round(canvas.width / ver);
        return verList
    }

    drawLines() { //draws the vertical and horizontal canvas lines
        verList.splice(0, verList.length)
        horList.splice(0, horList.length)

        for (let R = 0; R <= num; R++) {
            this.lineMatrixHorizontal(R);
            this.lineMatrixVertical(R);
        }
    }
}

let line = new LineDraw

export { line }