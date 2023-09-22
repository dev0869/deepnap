
const CustomButton = () => {
  const styles = {
    anchor: {
      position: 'relative',
      display: 'inline-block',
      fontWeight: 'bold',
      color: '#0c0c0c',
      textDecoration: 'none',
      overflow: 'hidden',
      marginTop: '4px',
      padding: '17px 40px',
      borderRadius: '50px',
      border: '0',
      backgroundColor: 'white',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.05)',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      fontSize: '15px',
      transition: 'all 0.5s ease',
    },
    anchorHover: {
      letterSpacing: '3px',
      backgroundColor: 'hsl(197, 81%, 45%)',
      color: 'hsl(0, 0%, 100%)',
      boxShadow: '0px 0px 19px 0px rgb(19, 171, 209)',
    },
    span: {
      position: 'absolute',
      display: 'block',
    },
  };

  return (
    <button style={styles.anchor}>
      <span>Buy now</span>
    </button>
  );
};


export default CustomButton;
