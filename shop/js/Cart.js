class Cart extends React.Component {

  shouldComponentUpdate(nextProps) {
    const prevIsOpen = this.props.isOpen;
    const prevItemsLength = this.props.items.length;

    const {
      isOpen: nextIsOpen,
      items: nextItems
    } = nextProps;

    return (prevIsOpen !== nextIsOpen) || (nextIsOpen && (prevItemsLength !== nextItems.length));
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
