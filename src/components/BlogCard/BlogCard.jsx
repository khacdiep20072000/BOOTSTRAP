import React from "react";
import "./BlogCard.css";
import blog1 from "../../images/blog-1.jpg";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-img">
        <img src={blog1} alt="" className="img-fluid" />
      </div>
      <div className="blog-content">
        <p className="date">1/1/1</p>
        <h5 className="title">
          Cấu hình realme C53: Màn hình sắc nét, hiệu năng ổn định và giá bán
          hấp dẫn
        </h5>
        <p className="desc">
          Những chiếc smartphone đang trở thành một phần không thể thiếu trong
          cuộc sống. Nếu bạn đang tìm kiếm một chiếc điện thoại với hiệu năng ổn
          định, tính năng đặc biệt và giá bán phải chăng, thì realme C53 là một
          sự lựa chọn đáng cân nhắc. Hãy cùng 24h Công nghệ khám phá cấu hình
          realme C53 ngay bên dưới nhé!
        </p>
        <Link className="button">
          <span className="text-black">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
