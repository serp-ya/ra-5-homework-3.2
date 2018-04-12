class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };

    this.searchBar = null;
    this.getSearchBar = searchBar => this.searchBar = searchBar;
  }


  componentDidMount() {
    document.addEventListener('scroll', this.setPosition);
  }

  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.setPosition);
  }
  

  render() {
    return <SearchBoxView refs={{getSearchBar: this.getSearchBar}} fixed={this.state.fixed} />
  }


  isFixed() {
    const offsetTopSearchBar = this.searchBar.offsetTop;
    const offsetTopWindow = window.pageYOffset;
    
    return offsetTopSearchBar < offsetTopWindow;
  }

  setPosition = () => {
    const currentState = this.state.fixed;
    const newState = this.isFixed();

    if (currentState !== newState) {
      this.setState({fixed: newState})
    }
  }
}
