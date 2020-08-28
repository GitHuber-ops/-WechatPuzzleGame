import React from "react";


interface CanvasWithImgProps {
    className?: string;
    imgSrc: string;
    width?: number;
    height?: number;
    canvasRef?: React.RefObject<HTMLCanvasElement>;
    drawFunc: (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => void;
}

interface CanvasWithImgStates {

}

class CanvasWithImg extends React.Component<CanvasWithImgProps, CanvasWithImgStates> {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    image: HTMLImageElement;


    constructor(props: CanvasWithImgProps) {
        super(props);
        if (props.canvasRef) {
            this.canvasRef = props.canvasRef;
        } else {
            this.canvasRef = React.createRef();
        }

        this.image = new Image();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        if (canvas === null) {
            console.error("CANVAS ERF IS NULL");
            return;
        }
        const ctx = canvas.getContext("2d");
        if (ctx === null) {
            console.error("CANVAS UNSPPORT");
            return;
        }
        this.image.onload = () => {

            this.props.drawFunc(ctx, this.image)
        };
        this.image.src = this.props.imgSrc;



    }
    componentDidUpdate() {

    }
    render() {

        return (
            <canvas
                ref={this.canvasRef}
                className={this.props.className}
                width={this.props.width}
                height={this.props.height}
            >
            </canvas>

        )
    }
}

export default CanvasWithImg;