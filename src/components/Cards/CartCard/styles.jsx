import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
    height: 180,
    width: 350,
    borderRadius: 12,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  imageWrapper: {
    width: 90,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  productInfos: {
    flex: 1,
    height: "70%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    color: "#cfcdcd",
    marginLeft: 5,
  },
  removeCartBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    gap: 2,
  },
  cartQntd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
