import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faSearch,
  faThLarge,
  faBeerMugEmpty,
  faUtensils,
  faReceipt,
  faCashRegister,
  faPlus,
  faDollarSign,
  faFileAlt,
  faGlassMartiniAlt,
  faUserPlus,
  faCaretDown,
  faTable,
  faWineBottle,
  faCocktail,
  faPepperHot,
  faDrumstickBite,
  faEgg,
  faCupcake,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get('window');

const ProductItem = ({ name, plu, price, isSelected = false, onPress }) => (
  <TouchableOpacity
    style={[
      styles.productButton,
      isSelected ? styles.productButtonSelected : styles.productButtonDefault,
    ]}
    onPress={onPress}
  >
    <Text style={[styles.productName, isSelected ? styles.textWhite : styles.textGray300]}>
      {name}
    </Text>
    <View style={styles.productDetails}>
      <Text style={[styles.productDetailText, isSelected ? styles.textBlue300 : styles.textGray400]}>
        {plu}
      </Text>
      <Text style={[styles.productDetailText, isSelected ? styles.textBlue300 : styles.textGray400]}>
        {price.toFixed(2)}
      </Text>
    </View>
  </TouchableOpacity>
);

const OrderItem = ({ id, qty, name, price, modifier = null }) => (
  <View>
    <View style={styles.orderItemRow}>
      <Text style={styles.orderItemIdQty}>{id}</Text>
      <Text style={styles.orderItemIdQty}>{qty}</Text>
      <Text style={styles.orderItemName}>{name}</Text>
      <Text style={styles.orderItemPrice}>{price.toFixed(2)}</Text>
    </View>
    {modifier && (
      <Text style={styles.orderItemModifier}>{modifier}</Text>
    )}
  </View>
);

const CategoryButton = ({ icon, text, isSelected = false, onPress }) => (
  <TouchableOpacity
    style={[
      styles.categoryButton,
      isSelected ? styles.categoryButtonSelected : styles.categoryButtonDefault,
    ]}
    onPress={onPress}
  >
    <FontAwesomeIcon icon={icon} size={24} style={[styles.categoryIcon, isSelected ? styles.textWhite : styles.textGray300]} />
    <Text style={[styles.categoryText, isSelected ? styles.textWhite : styles.textGray300]}>
      {text}
    </Text>
  </TouchableOpacity>
);

const ProductsScreen = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('Beverage');

  const products = [
    { id: 'p1', name: 'Beer on tap', plu: 'A1', price: 6.00 },
    { id: 'p2', name: 'Beer (bottle)', plu: 'A2', price: 8.00 },
    { id: 'p3', name: 'Beer - Import', plu: 'A3', price: 10.00 },
    { id: 'p4', name: 'Craft IPA', plu: 'A4', price: 9.50 },
    { id: 'p5', name: 'Stout Dark', plu: 'A5', price: 7.00 },
    { id: 'p6', name: 'Light Lager', plu: 'A6', price: 5.50 },
    { id: 'p7', name: 'Wheat Beer', plu: 'A7', price: 8.25 },
    { id: 'p8', name: 'Pilsner', plu: 'A8', price: 6.75 },
    { id: 'p9', name: 'Cider', plu: 'A9', price: 7.50 },
    { id: 'p10', name: 'Sour Ale', plu: 'A10', price: 11.00 },
  ];

  const orderItems = [
    { id: '1', qty: 1, name: 'house iced tea', price: 4.00 },
    { id: '2', qty: 1, name: 'whiskey sour', price: 12.00 },
    { id: '0', qty: 1, name: 'Calamari', price: 13.00 },
    { id: '0', qty: 1, name: 'bacon mac n\' cheese', price: 15.00 },
    { id: '0', qty: 1, name: 'coffee - special', price: 9.00 },
    { id: '0', qty: 1, name: 'Steak', price: 25.00, modifier: '* meat cooking: rare' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.fullScreenContainer}>
        <View style={styles.flexColFullHeight}>
          {/* Top bar */}
          <View style={styles.topBar}>
            <View style={styles.topBarLeft}>
              <Text style={styles.topBarTextOpacity}>iPad</Text>
              <TouchableOpacity style={styles.topBarButton}>
                <FontAwesomeIcon icon={faChevronLeft} size={18} style={styles.iconStyle} />
                <Text style={styles.topBarButtonText}>Tables</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.topBarSearchButton}>
                <FontAwesomeIcon icon={faSearch} size={20} style={styles.iconStyle} />
                <Text style={styles.topBarButtonText}>SEARCH</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.topBarButtonCol}>
                <FontAwesomeIcon icon={faThLarge} size={20} style={styles.topBarButtonColIcon} />
                <Text style={styles.topBarButtonColText}>PLU</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.topBarCenterLogo}>
              <Image
                source={{ uri: 'https://storage.googleapis.com/a1aa/image/1324846a-6a53-484c-5f11-b4d3fb61c4d1.jpg' }}
                style={styles.logoImage}
              />
            </View>
            <View style={styles.topBarRight}>
              <TouchableOpacity style={styles.topBarButtonCol}>
                <FontAwesomeIcon icon={faBeerMugEmpty} size={22} style={styles.iconStyle} />
                <Text style={styles.topBarButtonColText}>SEND-BAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.topBarButtonCol}>
                <FontAwesomeIcon icon={faUtensils} size={22} style={styles.iconStyle} />
                <Text style={styles.topBarButtonColText}>SEND-KITCHEN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.topBarButtonCol}>
                <FontAwesomeIcon icon={faReceipt} size={22} style={styles.iconStyle} />
                <Text style={styles.topBarButtonColText}>RECEIPT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.topBarButtonCol}>
                <FontAwesomeIcon icon={faCashRegister} size={22} style={styles.iconStyle} />
                <Text style={styles.topBarButtonColText}>PAY</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainContentArea}>
            <View style={styles.leftMenu}>
              <TouchableOpacity style={styles.leftMenuButton}>
                <FontAwesomeIcon icon={faPlus} size={20} style={styles.leftMenuIcon} />
                <Text style={styles.leftMenuText}>QUANTITY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.leftMenuButton}>
                <FontAwesomeIcon icon={faDollarSign} size={20} style={styles.leftMenuIcon} />
                <Text style={styles.leftMenuText}>PRICE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.leftMenuButton}>
                <FontAwesomeIcon icon={faFileAlt} size={20} style={styles.leftMenuIcon} />
                <Text style={styles.leftMenuText}>DETAIL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.leftMenuButton}>
                <FontAwesomeIcon icon={faGlassMartiniAlt} size={20} style={styles.leftMenuIcon} />
                <Text style={styles.leftMenuText}>MODIFIERS</Text>
              </TouchableOpacity>
              <View style={styles.flexGrow} /> 
              <TouchableOpacity style={styles.leftMenuButtonBottom}>
                <FontAwesomeIcon icon={faUserPlus} size={20} style={styles.leftMenuIcon} />
                <Text style={styles.leftMenuText}>CUSTOMER ADD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.leftMenuButtonBottom}>
                <Image
                  source={{ uri: 'https://storage.googleapis.com/a1aa/image/bad74520-93dd-47ba-49a1-8935f135a2f4.jpg' }}
                  style={styles.userAvatar}
                />
                <Text style={styles.userAvatarText}>OSCAR</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.centerPanel}>
              <View style={styles.searchBarContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Beer"
                  placeholderTextColor="#9ca3af"
                  value="Beer"
                />
              </View>
              <ScrollView contentContainerStyle={styles.productListContent} style={styles.productList}>
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    name={product.name}
                    plu={product.plu}
                    price={product.price}
                    isSelected={selectedProduct === product.id}
                    onPress={() => setSelectedProduct(product.id)}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Right order summary */}
            <View style={styles.rightSummary}>
              <View style={styles.summaryHeader}>
                <TouchableOpacity style={styles.actionsButton}>
                  <FontAwesomeIcon icon={faCaretDown} size={18} style={styles.iconStyle} />
                  <Text style={styles.actionsButtonText}>Actions</Text>
                </TouchableOpacity>
                <Text style={styles.tableNumber}>t-11</Text>
                <View style={styles.dateTime}>
                  <Text style={styles.dateTimeText}>6/8/17</Text>
                  <Text style={styles.dateTimeText}>2:59 PM</Text>
                </View>
              </View>

              <View style={styles.orderHeaders}>
                <Text style={styles.orderHeaderItem}>Time</Text>
                <TouchableOpacity style={styles.orderHeaderItemTouchable}>
                  <Text style={styles.orderHeaderItemText}>Product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderHeaderItemTouchable}>
                  <Text style={styles.orderHeaderItemText}>Seat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderHeaderItemTouchable}>
                  <Text style={styles.orderHeaderItemText}>User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderHeaderItemTouchable}>
                  <Text style={styles.orderHeaderItemText}>Course</Text>
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.orderList}>
                <View style={styles.orderListHeader}>
                  <Text style={styles.orderListHeaderIdQty}>ID</Text>
                  <Text style={styles.orderListHeaderIdQty}>Qty.</Text>
                  <Text style={styles.orderListHeaderName}>NAME</Text>
                  <Text style={styles.orderListHeaderPrice}>PRICE</Text>
                </View>
                {orderItems.map((item, index) => (
                  <OrderItem
                    key={index}
                    id={item.id}
                    qty={item.qty}
                    name={item.name}
                    price={item.price}
                    modifier={item.modifier}
                  />
                ))}
              </ScrollView>

              <View style={styles.taxesSection}>
                <Text style={styles.taxLine}>0.00%: 0.00 (16.00)</Text>
                <Text style={styles.taxLine}>12.00%: 6.36 (59.36)</Text>
                <Text style={styles.taxLine}>21.00%: 1.89 (10.89)</Text>
              </View>

              <View style={styles.bottomButtons}>
                <View style={styles.bottomButtonsLeft}>
                  <TouchableOpacity style={styles.bottomButton}>
                    <FontAwesomeIcon icon={faGlassMartiniAlt} size={18} style={styles.iconStyle} />
                    <Text style={styles.bottomButtonText}>MODIFIERS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bottomButton}>
                    <FontAwesomeIcon icon={faTable} size={18} style={styles.iconStyle} />
                    <Text style={styles.bottomButtonText}>TABLE</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.seatButtons}>
                  <View style={styles.seatButtonCurrent}>
                    <Text style={styles.seatButtonText}>1</Text>
                  </View>
                  <TouchableOpacity style={styles.seatButton}>
                    <Text style={styles.seatButtonText}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.seatButton}>
                    <Text style={styles.seatButtonText}>3</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.totalDueSection}>
                <Text style={styles.totalDueLabel}>Total due:</Text>
                <Text style={styles.totalDueAmount}>86.25</Text>
              </View>
            </View>
          </View>

          {/* Bottom category bar */}
          <View style={styles.bottomCategoryBar}>
            <CategoryButton icon={faGlassMartiniAlt} text="Beverage" isSelected={selectedCategory === 'Beverage'} onPress={() => setSelectedCategory('Beverage')} />
            <CategoryButton icon={faWineBottle} text="Wine" isSelected={selectedCategory === 'Wine'} onPress={() => setSelectedCategory('Wine')} />
            <CategoryButton icon={faBeerMugEmpty} text="Beer" isSelected={selectedCategory === 'Beer'} onPress={() => setSelectedCategory('Beer')} />
            <CategoryButton icon={faCocktail} text="Cocktails" isSelected={selectedCategory === 'Cocktails'} onPress={() => setSelectedCategory('Cocktails')} />
            <CategoryButton icon={faPepperHot} text="Starters" isSelected={selectedCategory === 'Starters'} onPress={() => setSelectedCategory('Starters')} />
            <CategoryButton icon={faDrumstickBite} text="Main" isSelected={selectedCategory === 'Main'} onPress={() => setSelectedCategory('Main')} />
            <CategoryButton icon={faEgg} text="Sides" isSelected={selectedCategory === 'Sides'} onPress={() => setSelectedCategory('Sides')} />
            <CategoryButton icon={faCupcake} text="Dessert" isSelected={selectedCategory === 'Dessert'} onPress={() => setSelectedCategory('Dessert')} />
            <CategoryButton icon={faStar} text="Discounts" isSelected={selectedCategory === 'Discounts'} onPress={() => setSelectedCategory('Discounts')} />
            <CategoryButton icon={faUtensils} text="Express Menus" isSelected={selectedCategory === 'Express Menus'} onPress={() => setSelectedCategory('Express Menus')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1f2937',
  },
  fullScreenContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  flexColFullHeight: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1f2937',
  },
  // Top bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2d3748',
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#d1d5db',
    fontSize: 14, // Increased from 12
    fontWeight: '600',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  topBarTextOpacity: {
    fontSize: 12, // Increased from 10
    fontWeight: '400',
    opacity: 0.7,
    color: '#d1d5db',
  },
  topBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  topBarButtonText: {
    color: '#d1d5db',
    fontSize: 14, // Increased from 12
    textTransform: 'uppercase',
    letterSpacing: 0.05,
    fontWeight: '600',
  },
  topBarSearchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  topBarButtonCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarButtonColIcon: {
    color: '#9ca3af',
  },
  topBarButtonColText: {
    fontSize: 12, // Increased from 10
    textTransform: 'uppercase',
    letterSpacing: 0.05,
    fontWeight: '600',
    color: '#d1d5db',
  },
  topBarCenterLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: 32,
    width: 32,
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 24,
  },
  iconStyle: {
    color: '#d1d5db',
  },

  // Main content area
  mainContentArea: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  // Left vertical menu
  leftMenu: {
    flexDirection: 'column',
    backgroundColor: '#374151',
    width: 64,
    color: '#9ca3af',
    fontSize: 12, // Increased from 10
    fontWeight: '600',
  },
  leftMenuButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#4b5563',
  },
  leftMenuIcon: {
    color: '#9ca3af',
  },
  leftMenuText: {
    color: '#9ca3af',
    fontSize: 12, // Increased from 10
    textTransform: 'uppercase',
  },
  flexGrow: {
    flexGrow: 1,
  },
  leftMenuButtonBottom: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#4b5563',
  },
  userAvatar: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  userAvatarText: {
    fontSize: 11, // Increased from 9
    marginTop: 4,
    color: '#9ca3af',
    textTransform: 'uppercase',
  },

  // Center search and product list
  centerPanel: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#1f2937',
  },
  searchBarContainer: {
    padding: 12,
  },
  searchInput: {
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4b5563',
    backgroundColor: '#1f2937',
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#d1d5db',
    fontSize: 16, // Added explicit font size
  },
  productList: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  productListContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 8,
    columnGap: 8,
  },
  productButton: {
    borderRadius: 6,
    padding: 12,
    width: '32%',
  },
  productButtonDefault: {
    backgroundColor: '#4b4b4b',
  },
  productButtonSelected: {
    backgroundColor: '#3b4a9a',
  },
  productName: {
    fontSize: 14, // Increased from 12
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'left',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productDetailText: {
    fontSize: 12, // Increased from 10
    fontWeight: '400',
  },
  textWhite: {
    color: 'white',
  },
  textGray300: {
    color: '#d1d5db',
  },
  textBlue300: {
    color: '#93c5fd',
  },
  textGray400: {
    color: '#9ca3af',
  },

  // Right order summary
  rightSummary: {
    flexDirection: 'column',
    width: 320,
    backgroundColor: '#2d3748',
    color: '#d1d5db',
    fontSize: 14, // Increased from 12
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#4b5563',
  },
  actionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    borderWidth: 1,
    borderColor: '#4b5563',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  actionsButtonText: {
    fontSize: 14, // Increased from 12
    color: '#d1d5db',
  },
  tableNumber: {
    fontWeight: '600',
    fontSize: 14, // Added explicit font size
  },
  dateTime: {
    textAlign: 'right',
  },
  dateTimeText: {
    fontSize: 11, // Increased from 9
    color: '#9ca3af',
  },
  orderHeaders: {
    flexDirection: 'row',
    columnGap: 4,
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: '#4b5563',
    color: '#9ca3af',
  },
  orderHeaderItem: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    color: '#9ca3af',
    fontSize: 12, // Added explicit font size
  },
  orderHeaderItemTouchable: {
    flex: 1,
    alignItems: 'center',
  },
  orderHeaderItemText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#d1d5db',
    fontSize: 12, // Added explicit font size
  },
  orderList: {
    flexDirection: 'column',
    overflow: 'hidden',
    maxHeight: 240,
    paddingHorizontal: 12,
  },
  orderListHeader: {
    flexDirection: 'row',
    fontWeight: '600',
    borderBottomWidth: 1,
    borderColor: '#4b5563',
    paddingVertical: 4,
    color: '#9ca3af',
    fontSize: 12, // Added explicit font size
  },
  orderListHeaderIdQty: {
    width: 32,
    textAlign: 'center',
    fontSize: 12, // Added explicit font size
  },
  orderListHeaderName: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 12, // Added explicit font size
  },
  orderListHeaderPrice: {
    width: 64,
    textAlign: 'right',
    fontSize: 12, // Added explicit font size
  },
  orderItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#4b5563',
    paddingVertical: 4,
  },
  orderItemIdQty: {
    width: 32,
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 12, // Added explicit font size
  },
  orderItemName: {
    flex: 1,
    paddingLeft: 8,
    color: '#d1d5db',
    fontSize: 14, // Increased from implicit
  },
  orderItemPrice: {
    width: 64,
    textAlign: 'right',
    color: '#d1d5db',
    fontSize: 14, // Increased from implicit
  },
  orderItemModifier: {
    paddingLeft: 96,
    fontSize: 12, // Increased from 10
    fontStyle: 'italic',
    color: '#9ca3af',
    marginBottom: 4,
  },
  taxesSection: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    rowGap: 4,
    borderTopWidth: 1,
    borderColor: '#4b5563',
    textAlign: 'right',
    color: '#9ca3af',
    fontSize: 13, // Increased from 11
  },
  taxLine: {
    textAlign: 'right',
    color: '#9ca3af',
    fontSize: 13, // Increased from 11
  },
  bottomButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#4b5563',
  },
  bottomButtonsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    fontSize: 14, // Increased from 12
  },
  bottomButton: {
    backgroundColor: '#4b5563',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  bottomButtonText: {
    color: '#d1d5db',
    fontSize: 14, // Added explicit font size
  },
  seatButtons: {
    flexDirection: 'row',
    columnGap: 8,
  },
  seatButtonCurrent: {
    backgroundColor: '#4b5563',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  seatButton: {
    backgroundColor: '#4b5563',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  seatButtonText: {
    color: '#d1d5db',
    fontWeight: '600',
    fontSize: 14, // Added explicit font size
  },
  totalDueSection: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#4b5563',
    textAlign: 'right',
  },
  totalDueLabel: {
    fontWeight: '700',
    color: 'white',
    fontSize: 20, // Increased from 18
    lineHeight: 24,
  },
  totalDueAmount: {
    fontWeight: '700',
    color: 'white',
    fontSize: 20, // Increased from 18
  },

  // Bottom category bar
  bottomCategoryBar: {
    flexDirection: 'row',
    backgroundColor: '#374151',
    borderTopWidth: 1,
    borderColor: '#4b5563',
    color: '#d1d5db',
    fontSize: 12, // Increased from 10
    fontWeight: '600',
  },
  categoryButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  categoryButtonSelected: {
    backgroundColor: '#3b4a9a',
  },
  categoryButtonDefault: {},
  categoryIcon: {
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12, // Increased from 10
  },
});

export default ProductsScreen;