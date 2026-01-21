// Câu 1: Constructor Function
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Tao mang san pham
var dsSanPham = [
    new Product(1, "Samsung S24 Ultra", 31000000, 10, "Phone", true),
    new Product(2, "iPhone 15", 22000000, 5, "Phone", true),
    new Product(3, "Laptop Dell XPS", 45000000, 3, "Laptop", true),
    new Product(4, "Chuột không dây", 150000, 0, "Accessories", true),
    new Product(5, "Bàn phím cơ", 800000, 15, "Accessories", true),
    new Product(6, "Tai nghe Bluetooth", 550000, 20, "Accessories", false)
];

console.log("Danh sách ban đầu:", dsSanPham);

// Câu 3: Mảng mới chỉ chứa name và price

let listNamePrice = [];
for (let i = 0; i < dsSanPham.length; i++) {
    listNamePrice.push({
        name: dsSanPham[i].name,
        price: dsSanPham[i].price
    });
}
console.log("Câu 3:", listNamePrice);

// Câu 4: Lọc sp còn hàng (quantity > 0)
let spConHang = dsSanPham.filter(function(sp) {
    return sp.quantity > 0;
});
console.log("Câu 4 (Còn hàng):", spConHang);

// Câu 5: Kiểm tra sp giá trên 30tr

let checkGia = dsSanPham.some(sp => sp.price > 30000000);
if (checkGia) {
    console.log("Câu 5: Có sản phẩm trên 30 triệu");
} else {
    console.log("Câu 5: Không có");
}

// Câu 6: Kiểm tra danh mục Accessories có đang bán hết không
// Lọc ra phụ kiện trước
let listPhuKien = dsSanPham.filter(sp => sp.category === "Accessories");
// Kiểm tra tất cả
let checkBan = listPhuKien.every(sp => sp.isAvailable == true);
console.log("Câu 6:", checkBan);

// Câu 7: Tính tổng giá trị kho

let tongTien = 0;
dsSanPham.forEach(sp => {
    tongTien += sp.price * sp.quantity;
});
console.log("Câu 7 (Tổng kho): " + tongTien + " VNĐ");

// Câu 8: For...of in ra thông tin
console.log("--- Câu 8 ---");
for (let item of dsSanPham) {
    let trangThai = item.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(item.name + " - " + item.category + " - " + trangThai);
}

// Câu 9: For...in duyệt thuộc tính
console.log("--- Câu 9 ---");
// Lấy thử sản phẩm đầu tiên
let spMau = dsSanPham[0];
for (let key in spMau) {
    console.log(key + ": " + spMau[key]);
}

// Câu 10: Tên các sp đang bán và còn hàng
console.log("--- Câu 10 ---");
let ketQuaCau10 = [];
for (let i = 0; i < dsSanPham.length; i++) {
    let sp = dsSanPham[i];
    if (sp.isAvailable == true && sp.quantity > 0) {
        ketQuaCau10.push(sp.name);
    }
}
console.log(ketQuaCau10);