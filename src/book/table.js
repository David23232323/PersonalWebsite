

function Table(props) {
    const { products } = props;
    let sortedProducts = [...products];
    const [sortedField, setSortedField] = React.useState(null);

    sortedProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return (
      <Table>
        {/* as before */}
      </Table>
    );
  }

export default Table; 