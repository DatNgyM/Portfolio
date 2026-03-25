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
      titleLine1: "UI/UX DESIGNER &",
      titleLine2: "FRONTEND DEVELOPER",
      subtitle: "I'm a creative UI/UX Designer who transforms user needs into intuitive digital realities. With a strong foundation in visual design and frontend development, I craft beautiful, functional, and user-centered experiences from wireframes to clean code.",
      cleanCode: "visual design",
      beautifulDesign: "clean code",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      features: {
        cleanCode: {
          title: "Design Handoff",
          desc: "Specs, components & clear delivery"
        },
        modernUI: {
          title: "Responsive UI Design",
          desc: "Mobile-first & accessibility-friendly layouts"
        },
        fastPerformance: {
          title: "Interactive Prototyping",
          desc: "Clickable flows, micro-interactions & testing"
        }
      }
    },
    about: {
      title: "About Me",
      description: "I'm a creative UI/UX Designer who transforms user needs into intuitive digital realities. With a strong foundation in visual design and frontend development, I craft beautiful, functional, and user-centered experiences from wireframes to clean code.",
      personalInfo: "Personal Information",
      email: "Email",
      location: "Location",
      dateOfBirth: "Date of Birth",
      position: "Position",
      skills: "Skills",
      education: "Education",
      certificationLearning: "Project-based Learning",
      certifications: "Professional Certifications",
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
      titleLine1: "THIẾT KẾ UI/UX &",
      titleLine2: "LẬP TRÌNH FRONTEND",
      subtitle: "Tôi là một UI/UX Designer sáng tạo, biến nhu cầu người dùng thành những trải nghiệm số trực quan. Với nền tảng vững về thiết kế trực quan và phát triển frontend, tôi kiến tạo trải nghiệm đẹp, chức năng và lấy người dùng làm trung tâm, từ wireframe đến code sạch.",
      cleanCode: "thiết kế trực quan",
      beautifulDesign: "code sạch",
      viewProjects: "Xem Dự Án",
      contactMe: "Liên Hệ",
      features: {
        cleanCode: {
          title: "Design Handoff",
          desc: "Thông số, component & bàn giao rõ ràng"
        },
        modernUI: {
          title: "Responsive UI Design",
          desc: "Mobile-first & bố cục tối ưu"
        },
        fastPerformance: {
          title: "Interactive Prototyping",
          desc: "Luồng click-through, micro-interactions & kiểm thử"
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
      certificationLearning: "Học Dự Án",
      certifications: "Chứng Chỉ Chuyên Nghiệp",
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

