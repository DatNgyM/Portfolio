export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      titleLine1: "CREATIVE",
      titleLine2: "DEVELOPER",
      subtitle: "I'm a creative Frontend Developer who transforms ideas into digital reality. With a passion for clean code and beautiful design, I craft beautiful, functional, and user-centered web experiences using modern web technologies.",
      cleanCode: "clean code",
      beautifulDesign: "beautiful design",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      features: {
        cleanCode: {
          title: "Clean Code",
          desc: "Optimized & Scalable"
        },
        modernUI: {
          title: "Modern UI",
          desc: "Pixel Perfect Design"
        },
        fastPerformance: {
          title: "Fast Performance",
          desc: "Lightning Speed"
        }
      }
    },
    about: {
      title: "About Me",
      description: "I'm a passionate developer and designer who loves creating beautiful, functional, and user-centered digital experiences. With a keen eye for detail and a commitment to excellence, I bring ideas to life through code and design.",
      personalInfo: "Personal Information",
      email: "Email",
      location: "Location",
      dateOfBirth: "Date of Birth",
      position: "Position",
      skills: "Skills",
      education: "Education",
      certificationLearning: "Certification Learning",
      certifications: "Certifications",
      featuredProjects: "Featured Projects",
      viewCertificate: "View Certificate",
      issuedDate: "Issued Date"
    },
    projects: {
      title: "Projects",
      viewAll: "View All Projects",
      liveDemo: "Live Demo",
      github: "GitHub"
    },
    skills: {
      title: "Skills"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind? Let's work together!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again."
    },
    blog: {
      title: "Blog",
      readMore: "Read More",
      backToBlog: "Back to Blog",
      viewAllPosts: "View All Posts",
      readTime: "min read",
      category: "Category"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      projects: "Dự Án",
      skills: "Kỹ Năng",
      blog: "Blog",
      contact: "Liên Hệ"
    },
    hero: {
      titleLine1: "NHÀ PHÁT TRIỂN",
      titleLine2: "SÁNG TẠO",
      subtitle: "Tôi là một Frontend Developer sáng tạo, biến ý tưởng thành hiện thực số. Với niềm đam mê về code sạch và thiết kế đẹp, tôi tạo ra những trải nghiệm web đẹp, chức năng và tập trung vào người dùng bằng các công nghệ web hiện đại.",
      cleanCode: "code sạch",
      beautifulDesign: "thiết kế đẹp",
      viewProjects: "Xem Dự Án",
      contactMe: "Liên Hệ",
      features: {
        cleanCode: {
          title: "Code Sạch",
          desc: "Tối Ưu & Mở Rộng"
        },
        modernUI: {
          title: "Giao Diện Hiện Đại",
          desc: "Thiết Kế Hoàn Hảo"
        },
        fastPerformance: {
          title: "Hiệu Năng Cao",
          desc: "Tốc Độ Nhanh"
        }
      }
    },
    about: {
      title: "Giới Thiệu",
      description: "Tôi là một developer và designer đam mê, yêu thích việc tạo ra những trải nghiệm số đẹp, chức năng và tập trung vào người dùng. Với sự chú ý đến từng chi tiết và cam kết về sự xuất sắc, tôi biến ý tưởng thành hiện thực thông qua code và thiết kế.",
      personalInfo: "Thông Tin Cá Nhân",
      email: "Email",
      location: "Địa Điểm",
      dateOfBirth: "Ngày Sinh",
      position: "Vị Trí",
      skills: "Kỹ Năng",
      education: "Học Vấn",
      certificationLearning: "Quá Trình Học Chứng Chỉ",
      certifications: "Chứng Chỉ",
      featuredProjects: "Dự Án Nổi Bật",
      viewCertificate: "Xem chứng chỉ",
      issuedDate: "Ngày Cấp"
    },
    projects: {
      title: "Dự Án",
      viewAll: "Xem Tất Cả Dự Án",
      liveDemo: "Live Demo",
      github: "GitHub"
    },
    skills: {
      title: "Kỹ Năng"
    },
    contact: {
      title: "Liên Hệ",
      subtitle: "Có dự án trong đầu? Hãy làm việc cùng nhau!",
      name: "Tên",
      email: "Email",
      message: "Tin nhắn",
      send: "Gửi Tin Nhắn",
      sending: "Đang gửi...",
      success: "Gửi tin nhắn thành công!",
      error: "Gửi tin nhắn thất bại. Vui lòng thử lại."
    },
    blog: {
      title: "Blog",
      readMore: "Đọc Thêm",
      backToBlog: "Xem tất cả bài viết",
      viewAllPosts: "Xem Tất Cả Bài Viết",
      readTime: "phút đọc",
      category: "Danh Mục"
    },
    footer: {
      rights: "Bảo lưu mọi quyền."
    }
  }
};

export type Language = 'en' | 'vi';
export type TranslationKey = keyof typeof translations.en;

