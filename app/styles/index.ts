export default {
  padding(a: any, b: any = null, c: any = null, d: any = null) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    };
  },

  margin(a: any, b: any = null, c: any = null, d: any = null) {
    return {
      marginTop: a,
      marginRight: b ? b : a,
      marginBottom: c ? c : a,
      marginLeft: d ? d : (b ? b : a)
    };
  },
};
