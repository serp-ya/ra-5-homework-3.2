class ProgressBar extends React.Component {

  constructor(props) {
    super(props);

    this.outerCircleOptions = {
      radius: 52,
      color: '#4ca89a'
    };

    this.innerCircleOptions = {
      radius: 45,
      color: '#96d6f4'
    };

    this.canvas = null;
    this.getRefCanvas = canvas => this.canvas = canvas;
  }

  get canvasCenter() {
    const {width, height} = this.canvas;

    return {
      x: width / 2,
      y: height / 2
    }
  }


  componentDidMount(nextProps) {
    this.ctx = this.canvas.getContext('2d');
    this.updateCircles();
  }


  componentWillUpdate(nextProps) {
    this.updateCircles(nextProps);
  }


  updateCircles(nextProps) {
    const { total, completed } = nextProps || this.props;
    const position = this.canvasCenter;

    const outerCircleOptions = {
      ...this.outerCircleOptions,
      position
    };

    const innetCircleOptions = {
      ...this.innerCircleOptions,
      filledPercent: (completed / total) * 100,
      position
    };

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawCircle(this.ctx, outerCircleOptions);
    this.drawCircle(this.ctx, innetCircleOptions);
  }


  convertGraduses = (gradus) => gradus * (Math.PI / 180);


  drawCircle(context, options) {
    const {
      lineWidth = '7',
      filledPercent = 100,
      position,
      radius,
      color
    } = options;

    const startDeg = this.convertGraduses(90); // 90 - начало круга из нижней точки
    const endDeg = this.convertGraduses((90 + (360 / 100) * filledPercent)); // 450 - конец круга

    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.arc(position.x, position.y, radius, startDeg, endDeg, false);

    context.stroke();
  }


  render() {
    return (
      <canvas 
        ref={this.getRefCanvas}
        id="progressCanvas" 
        className="progress" 
      />
    );
  }
}
