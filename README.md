## Đây là Project tái bản của AngularCreateFistProject
- mục tiêu là biến project thành một Blog Review Anime của mình.
- những thứ có thể có bao gồm các thao tác đăng sửa xóa bài cơ bản.
- trang giao diện chính có banner, top ani của mùa...


# Documents ver.1

<details open="" align="left">
  <summary>
   &#9996; Giai đoạn thiết kế cho trang Blog.</summary>
    <br>
<details open="" align="left">
  <summary>
      1. Wireframe &#9997;
  </summary>
    
  <h2>1.1. mô tả Wireframe </h2>

  <h3>1.1.1. Wireframe - layout page </h3>

  Đây là wireframe mô tả phần viền bao quanh content của trang.

- Các thành phần hiển thị gồm có:

- Menu điều hướng duy chuyển giữa các trang web.

- Thanh hiển thị trạng thái đăng nhập của【 6 】user.

    - Nếu【 6 】user chưa đăng nhập hệ thống sẽ hiển thị trạng thái avatar ẩn danh kèm cảnh báo.
      
    - Nếu ngược lại sẽ hiển thị tên người dùng và avatar【 3 】Family.

- Logo của trang web.

- Phần footer chứa thông tin của về các đơn vị tổ chức, một số thông tin nhanh về trang web.


| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/76cb0989-e73b-4382-97cc-f2dd80513be3" width="300">
  
<br>
 
<h3>1.1.2. Wireframe - main page </h3>

main page mô tả giao diện chính của trang web. Giao diện đầu tiên người dùng xem khi vào trang
Các thành phần con bao gồm:

- Một mục chính chứa 【 7 】banner của trang.

- Một mục phụ chứa các【 4 】ứng viên hoặc thông tin của vòng đấu hiện tại tùy theo thiết kế của chủ đề 【 1 】mùa vote đó.

- Một mục con chứa một số mô tả nhanh và các nhân vật sẽ góp mặt trong 【 2 】 đợt vote của mùa vote.

- Bảng danh sách chứa các mùa và thông tin của chúng.

- Bảng chứa tiêu đề và một số thông tin【 2 】đợt vote của mùa trước.

- Một phần con chứa thông tin về ss của mùa và hiển thị ngẫu nhiên một bộ anime của mùa kèm theo một số thông tin.

- Một mục chứa bài review, bài viết mới nhất trên kênh blog và một số thông tin như tiêu đề, số người xem và số lượt thích.

| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/7854000a-6e8d-4b53-9560-8f9ca426e398" width="300">

<br>

<h3>1.1.3. Wireframe - Register user </h3>

Register mô tả trang đang ký【 6 】tk (user) cho người dùng. giao diện bao gồm các thành phần sau:
- Avatar【 3 】Family, người dùng nếu chưa có tài khoản sẽ hiển thị avatar ẩn danh, ngược lại nếu 
    
  - Đăng nhập view chỉ hiện avatar của【 3 】Family.

- Người dùng có thể thực hiện chức năng đăng ký【 6 】tk (user) với các thành phần sau trên trang

- Nhấn chọn avatar để mở hộp thoại chứa thông tin và danh sách các【 4 】ứng viên.

- Lựa chọn nhân vật của bạn, lưu ý một tài khoản chỉ có một【 4 】ứng viên duy nhất được chọn.

- Sao khi chọn nhân vật, thực hiện nhập một số thông tin bắt buộc sau: là tên 【 6 】tk của bạn và mật khẩu.

- Nút đăng ký để thực hiện đăng  tài khoản.

| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/96975bde-5262-4103-8b43-034434e56496" width="300">


<br>

<h3>1.1.4. Winner character vote. </h3>

Top 1 charater là trang dùng để công bố kết quả và các 【 2 】 đợt vote theo thời gian thực.
Thành phần giao diện gồm các phần:

- Khu vực hiển thị danh sách 【 4 】ứng viên.

- Khu vực【 7 】banner chứa nhân vật đạt được chiến thắng trong 【 1 】 mùa vote hiện tại.

- Khu vực hiển thị【 4 】quy hiệu người chiến thắng của mùa.

- Biểu đồ hiển thị sơ lượt về các 【 1 】 mùa vote.

- Biểu đồ hiển thị số lần chiến thắng của 【 4 】 ứng viên qua từng 【 1 】 mùa vote.

- Khu vực hiển thị các bình luận về nhân vật và một số thông tin khác như lược xem, lượt thích.

- Khu  hiển thị thông tin sơ bộ của nhân vật, có thể dẫn đến nguồn thông tin đầy đủ của nhân vật.

- Khu vực hiển thị tên nhân vật.

| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/31c2da6a-c0f4-4e3b-9aec-e89ff4dc9dc6" width="300">


<br>

<h3>1.1.5. Detail Character </h3>

update sau.

| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/888271e2-d49c-4883-9155-8696d2e33d10" width="300">


<br>

<h3>1.1.6. Wireframe -  Vote character </h3>

Vote charater hiển thị giao diện để người dùng vote nhân vật của mình
Hệ thống sẽ chỉ cho người dùng vote các nhân vật có thể vote trong【 2 】đợt vote đó.
Tùy vào cài đặt của admin【 2 】 đợt vote đó có thể có cho phép 【 6 】tk vote được một hay nhiều lần.
Các thành phần giao diện gồm:

- Mục chứa tiêu đề và thông tin mô tả 【 2 】đợt vote, mục sẽ bao gồm các luật vote hoặc một số điều lệ
     
     - Quản trị viên muốn lưu ý đến【 6 】 tk như các điều khoản, hành vi nghiêm cấm.

- Mục chính chứa【 7 】Banner của【 4 】ứng viên chỉ định chuẩn bị vote.

- Phần phụ chứa thông tin cơ bản về 【 4 】ứng viên.

- Phần trích dẫn lời thoại của 【 4 】ứng viên.

- Nút vote để xác nhận vote cho【 4 】ứng viên đang được chỉ định. 

- Phần hình ảnh thêm về【 4 】ứng viên có thể là nhiều hình nhưng có thể không phải tất cả của 【 4 】ứng viên.

- Mục chứa thông tin về thông tin thêm cho【 4 】ứng viên để giới thiệu.

- Phần chứa biểu đồ hiển thị【 9 】phần mở rộng.

- Nút vote cho phần thông tin thêm và hình ảnh.

- Danh sách các【 4 】ứng viên tham dự.

| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/27897753-ec3d-4705-80fa-89203a16d9c2" width="300">


<br>

<h3>1.1.7. Wireframe - Review </h3>

Chứa thông tin đầy đủ và nội dung của bài Review gồm những phần sau:

- Phần hiển thị danh sách cái bài review và thông tin đi kèm ngắn gọn như tiêu đề, lượt xem... 

- Phần bài viết chứa thumbai của bài và phần header chứa đầu đền của bài và thời gian, tác giả tổng lượt xem cảu bài.

- Phần body của bài viết có thể là viết chai hay dạng file  ‘ *.md ‘ để có thể đăng ảnh và tùy chỉnh kèm nội dung.

- Phần cuối bài viết có nơi để người dùng nhập bình luận, tả tym, like bài viết.

- Phần hiển thị bình luận box chat có thể reply, thả like, report các bình luận ko đúng nội quy Blog.

| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/afbebe52-152c-48de-8b45-8f063e169e08" width="300">


<br>

<h3>1.1.8. Wireframe - List Review </h3>

Chứa danh sách các bài đăng của Blog bao gồm:

- Thumbail hình bài viết. 

- Tiêu đề bài viết.

- Lượt xem.

- Lượt like.

- Like lượt thích.

| Tên | hình ảnh |
|  :--- |  :---: |
| Wireframe - layout page|<img src="https://github.com/user-attachments/assets/5b9f7c58-9473-4b98-8273-a0f7cf1b6ff7" width="300">

<br>

<br>

<br>

<br>

<br>

<br>

<br>


</details>
<details lose="" align="left">
  <summary>
      1. Demo bản vẽ của Blog 🎨🖌️
  </summary>
    <br>
  ...
  </details>
  </details>
<br>
<details lose="" align="left">
  <summary> 
      # progress ⚔
  </summary>
  <br>
Design And Ideas

1. thiết kế (Design UI/UX):
- Ký hiệu ``trạng thái``:
  - ✓ - đã hoàn thành.
  - ✘ - chưa hoàn thành.
  - ✈ - đang xây dựng.
  - 🔧 - đang sửa chữa.
- đang trong giai đoạn trình bầy ý tưởng ✈
  - nêu ý tưởng ✓
  - đang trong giai đoạn trình trình bầy wireframe

Wireframe: Desktop - iPad (992px and up) 🔧 (chỉnh sửa mô tả cho từng wf)

| Tên hoặc mô tả | ghi chú | ``trạng thái`` |
|  :--- |  :--- |  :---: |
| liên kết `wireframe` trên `figma` | [tại đây](https://www.figma.com/design/fgX0eg3NZonqN1RlvywQd0/BLOG-ANIME?node-id=0-1&t=NgMK65rTST1jAEjc-1) | ✓ |
| `trang chính` | none | ✓ |
| `khuyến nghị anime của mùa` | none | ✓ |
| `tất cả anime của mùa` | none | ✓ |
| `chi tiết anime` | none | ✓ |
| `chi tiết bài viết` | none | ✓ |
| `xếp hạng nhân vật` | none | ✓ |
| `bình chọn xếp hạng` | none | ✓ |
| `chi tiết nhân vật` | none | ✓ |
| `vòng loại xếp hạng` | none | ✓ |
| `công bố kết quả` | none | ✓ |
| `tài khoản n.vat` | #D_01: tài khoản là nv anime bất kì được cấp cố định không tạo tk.<br> Các người dùng join vào tk được đánh số id + mật khẩu để xác minh, khi nhân vật tk đạt hạng Rank cao trong xếp hạng sẽ hiện danh sách thành viên theo id <br> `vd: charater: Monkey D.Luffy - Rank: #1 - Luffy con: #001, #002, #003` <br> ngoài ra sẽ không có bất kì thông tin nào khác từ người bình chọn | ✘ |
| `Đăng ký user` | none | ✓ |

Wireframe: mobile (viewport < 768px)

| Tên hoặc mô tả | ghi chú | ``trạng thái`` |
|  :--- |  :--- |  :---: |
| liên kết `wireframe` trên `figma` | [tại đây](https://www.figma.com/design/fgX0eg3NZonqN1RlvywQd0/BLOG-ANIME?node-id=0-1&t=NgMK65rTST1jAEjc-1) | ✓ |

2. tạo chất liệu:
 - chất liệu có sẵn.
    - Hình ảnh Anime từ API. ✓
    - Chôm ở đâu đó trên mạng các thiết kế miễn phí được chia sẻ ✓
    - từ các trang web của tác phẩm gốc và các trang game, quảng cáo, web giới thiệu anime-tác phẩm manga... ✓
 - thiết kế chất liệu giao diện: ✈✈
    - Logo ✓
    - nút nhấn ✓
    - icon ✓
    - intro
    - theme
    - Layer ✓
    - khung ✓
    - Nhân vật cắt background ✓
    - background ✓
    - svg ✓
  - tạo bản thử cho từng wireframe:
    - register ✓
    - Main ✓
    - Top Charater ✓
    - Vote charater ✓
    - main vote ✓
  
<!---
[## thiết kế CSDL (Design Database) ✘
## Cải tạo khung dự án (Refactor Project) ✘
## tạo chức năng hệ thống (Code BE Funtions) ✘
## tạo chức giao diện (Code FE Funtions) ✘
## ...
## ...](url)
-->

</details>
