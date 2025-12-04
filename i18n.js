const translations = {
  en: {
    // Navigation
    nav_about: "About",
    nav_technology: "Technology",
    nav_contact: "Contact",
    nav_quote: "Request a Quote",
    
    // Index
    index_banner: "Official Exhibitor at CES 2026",
    index_banner_ces: "CES 2026",
    index_hero_line1: "Beyond Waste,",
    index_hero_line2: "Into Automation.",
    index_hero_desc: "The world's first fully automated cup recycling robot powered by Edge AI & Adaptive Robotics. We turn chaos into order.",
    index_explore: "Explore Technology",
    index_watch: "Watch Demo",
    index_scroll: "Scroll Down",
    
    index_features_title: "Why Coffeebara?",
    index_features_desc: "We replace inefficient manual labor with high-precision engineering.",
    index_feature1_title: "Edge AI Vision",
    index_feature1_desc: "Runs locally on Low-Cost HW with <1s latency. Detects cups, lids, and straws in real-time without cloud dependency.",
    index_feature2_title: "Adaptive Robotics",
    index_feature2_desc: "Soft gripper mechanism handles unstructured objects—crushed or sticky cups—with 99% separation success rate.",
    index_feature3_title: "Modular Design",
    index_feature3_desc: "Scalable architecture. From single units for cafes to industrial clusters for smart factories and campuses.",
    
    index_stats_time: "Processing Time",
    index_stats_accuracy: "Accuracy",
    index_stats_volume: "Volume Reduction",
    index_stats_operation: "Autonomous Operation",
    
    index_cta_title: "Ready to Automate Your Waste Stream?",
    index_cta_desc: "Join the revolution of smart recycling. Meet us at CES 2026 or request a demo today.",
    index_contact_quote: "Request a Quote",
    index_contact_sales: "Contact Sales",
    
    // Footer
    footer_copyright: "© 2024 Coffeebara Solutions. All rights reserved.",
    
    // Contact
    contact_hero_title: "Let's Build the Future of Automation",
    contact_hero_desc: "Whether you are interested in deploying NOCO on your campus or integrating our modular robotics into your factory, we are here to help.",
    contact_hq: "Headquarters",
    contact_hq_addr: "Room 303, Heavy Equipment Experiment Bldg,<br>120 Neungdong-ro, Gwangjin-gu, Seoul, Korea",
    contact_email: "Email Us",
    contact_response: "Response time: Within 24 hours",
    
    contact_form_interested: "I'm interested in...",
    contact_form_partnership: "Partnership",
    contact_form_product: "Product Quote",
    contact_form_tech: "Tech Inquiry",
    contact_form_name: "Your Name",
    contact_form_name_placeholder: "John Doe",
    contact_form_company: "Company Name",
    contact_form_company_placeholder: "Coffeebara Inc.",
    contact_form_email: "Email Address",
    contact_form_email_placeholder: "john@example.com",
    contact_form_message: "Message",
    contact_form_message_placeholder: "Tell us about your project or needs...",
    contact_form_submit: "Send Message",
    
    contact_ces_title: "Going to CES 2026?",
    contact_ces_desc: "Visit our booth at the 서울통합관 to see NOCO in action. Let's schedule a meeting in Las Vegas.",
    contact_ces_button: "Book a Meeting at CES",
    
    // About
    about_hero_title: "Engineering a Circular Economy",
    about_hero_desc: "We merge advanced robotics and Edge AI to redefine how the world processes waste.",
    
    about_idea_title: "From Idea to Innovation",
    about_idea_desc: "Coffeebara was founded in 2025 by a team of engineers passionate about solving the plastic crisis through technology. We realized that manual separation is the bottleneck of recycling.<br><br>Our mission is to automate this process using Robotics and Artificial Intelligence. We have grown from a university lab project into a resident startup at Konkuk University Campustown, developing the proprietary 'NOCO' system that utilizes computer vision to separate cups, lids, and liquids autonomously.",
    about_milestones: "Key Milestones",
    about_milestone_2026: "Selected Exhibitor for CES 2026 (서울통합관)",
    about_milestone_2025_1: "Filed Patent: AI-based Separation and Collection Apparatus",
    about_milestone_2025_2: "Resident Startup at Konkuk Univ. Campustown",
    about_milestone_2024: "Grand Prize (Minister's Award) at the 22nd Embedded SW Competition",
    
    about_competencies_title: "Core Competencies",
    about_competencies_desc: "We bridge the gap between environmental needs and engineering possibilities.",
    about_comp_vision: "Edge AI Vision",
    about_comp_vision_desc: "Real-time object detection and classification running directly on the device for minimal latency and maximum privacy.",
    about_comp_robotics: "Soft Robotics",
    about_comp_robotics_desc: "Adaptive mechanism design that can handle diverse cup shapes, separate lids, and ensure 99% stacking efficiency.",
    about_comp_iot: "Smart IoT",
    about_comp_iot_desc: "Real-time data collection on fill levels and machine status, enabling optimized route planning for waste collection.",
    
    about_team_title: "Meet the Team",
    about_team_desc: "Engineers and visionaries building the future of recycling.",
    
    about_values_title: "Our Values",
    about_value_sustainability: "Sustainability",
    about_value_sustainability_desc: "We utilize technology to create a tangible impact on the environment.",
    about_value_precision: "Precision Engineering",
    about_value_precision_desc: "We pursue high reliability through robust hardware and optimized software.",
    about_value_customer: "Customer Focus",
    about_value_customer_desc: "We solve real-world problems with user-centric design and feedback.",
    
    about_back: "Back to Home",
    
    // Technology
    tech_hero_title: "Advanced Robotics Powered by Edge AI",
    tech_hero_desc: "We don't just build bins. We engineer autonomous sorting modules capable of handling unstructured objects in chaotic environments.",
    
    tech_core_title: "Core Technologies",
    tech_core_desc: "Our proprietary stack enables precision automation beyond simple recycling.",
    
    tech_ai_title: "Lightweight Edge AI",
    tech_ai_desc: "Our YOLO-based vision model runs on embedded systems with <1s latency. It operates without cloud dependency, ensuring privacy and real-time processing even in unstable network environments.",
    tech_ai_tag1: "YOLOv8",
    tech_ai_tag2: "Edge AI",
    
    tech_gripper_title: "Adaptive Gripper",
    tech_gripper_desc: "Designed for unstructured objects. Our soft-robotics inspired mechanism can securely handle crushed cups, slippery surfaces, and various materials (PET, PP, Paper) with precise force control.",
    tech_gripper_tag1: "Robotics",
    tech_gripper_tag2: "Embodied AI",
    
    tech_modular_title: "Modular Architecture",
    tech_modular_desc: "Built for scalability. Each module (Vision, Separation, Cleaning) operates independently via Object-Oriented HW/SW, allowing for easy maintenance and customization for industrial factory lines.",
    tech_modular_tag: "Modular",
    
    tech_noco_title: "The 'NOCO' Process",
    tech_noco_desc: "How we apply our core tech to solve the disposable cup crisis.",
    
    tech_step1: "Recognition",
    tech_step1_title: "Recognition",
    tech_step1_desc: "Our computer vision system instantly detects and classifies incoming cups and materials, even when crushed or misaligned.",
    tech_step1_feat1: "Real-time Detection",
    tech_step1_feat2: "Multi-object Classification",
    tech_step1_accuracy: "99.9% Detection Accuracy",
    tech_step1_multi: "Multi-object Classification",
    
    tech_step2: "Separation",
    tech_step2_title: "Separation",
    tech_step2_desc: "The adaptive gripper securely grasps and transfers objects to separation stations based on material properties and contaminant levels.",
    tech_step2_feat1: "Non-destructive handling",
    tech_step2_feat2: "Handles 5+ cup sizes",
    tech_step2_non: "Non-destructive handling",
    tech_step2_sizes: "Handles 5+ cup sizes",
    
    tech_step3: "Cleansing",
    tech_step3_title: "Cleansing",
    tech_step3_desc: "Contamination detection and removal processes ensure only clean, grade-A material moves to the next stage.",
    tech_step3_feat1: "Minimal Water Usage",
    tech_step3_feat2: "High-speed Drying",
    tech_step3_water: "Minimal Water Usage",
    tech_step3_drying: "High-speed Drying",
    
    tech_step4: "Loading",
    tech_step4_title: "Loading",
    tech_step4_desc: "Clean material is automatically baled or loaded for shipment to recycling facilities, maximizing throughput and minimizing waste.",
    tech_step4_feat1: "Volume Reduction",
    tech_step4_feat2: "IoT Alerts",
    tech_step4_volume: "10x Volume Reduction",
    tech_step4_alerts: "IoT Full-Level Alerts",
    
    tech_specs_title: "Technical Specifications",
    tech_spec_processing_speed: "Processing Speed",
    tech_spec_vision: "Vision System",
    tech_spec_accuracy: "Recognition Accuracy",
    tech_spec_connectivity: "Connectivity",
    tech_spec_power: "Power Consumption",
    tech_spec_DOF: "DOF ( Degrees of Freedom, 모터 갯수 )",
    tech_spec_speed: "Processing Speed",
    tech_spec_speed_val: "5 seconds / cup",
    tech_spec_vision_val: "Edge AI (on Low-Cost HW)",
    tech_spec_accuracy_val: "> 99.5%",
    tech_spec_connectivity_val: "Wi-Fi / Ethernet",
    tech_spec_power_val: "Low-power mode supported",
    tech_spec_stack: "Software Stack",
    tech_spec_stack_val: "Python, C++",
    
    tech_custom_title: "Need a Custom Configuration?",
    tech_custom_desc: "Need custom specs for your factory?",
    tech_custom_button: "Contact Engineering Team",
  },
  ko: {
    // Navigation
    nav_about: "소개",
    nav_technology: "기술",
    nav_contact: "연락처",
    nav_quote: "견적 요청",
    
    // Index
    index_banner: "CES 2026 공식 참가업체",
    index_banner_ces: "CES 2026",
    index_hero_line1: "모듈형 스마트 팩토리",
    index_hero_line2: "자동화 시스템",
    index_hero_desc: "Edge AI와 로봇공학으로 구동되는 세계 최초의 완전 자동화 컵 재활용 로봇입니다.",
    index_explore: "기술 살펴보기",
    index_watch: "데모 보기",
    index_scroll: "아래로 스크롤",
    
    index_features_title: "Coffeebara를 선택하는 이유",
    index_features_desc: "비효율적인 수작업을 고정밀 엔지니어링으로 대체합니다.",
    index_feature1_title: "Edge AI 비전",
    index_feature1_desc: "저가 하드웨어에서 1초 미만의 지연 시간으로 로컬에서 실행됩니다. 클라우드 의존성 없이 실시간으로 컵, 뚜껑, 빨대를 감지합니다.",
    index_feature2_title: "적응형 로봇공학",
    index_feature2_desc: "독보적인 그리퍼 메커니즘은 일회용 플라스틱 컵을 포함한 비정형화 물체를 99% 분리 성공률로 처리합니다.",
    index_feature3_title: "모듈식 설계",
    index_feature3_desc: "카페의 단일 유닛부터 스마트 팩토리 및 캠퍼스를 위한 산업용 클러스터까지 확장 가능한 아키텍처입니다. ",
    
    index_stats_time: "처리 시간",
    index_stats_accuracy: "정확도",
    index_stats_volume: "부피 감소",
    index_stats_operation: "24/7 자동 운영",
    
    index_cta_title: "폐기물 흐름을 자동화할 준비가 되셨나요?",
    index_cta_desc: "스마트 재활용 혁명에 동참하세요. CES 2026에서 만나거나 오늘 데모를 요청하세요.",
    index_contact_quote: "견적 요청",
    index_contact_sales: "영업팀에 문의",
    
    // Footer
    footer_copyright: "© 2024 Coffeebara Solutions. 모든 권리 보유.",
    
    // Contact
    contact_hero_title: "미래의 자동화를 함께 만들어봅시다",
    contact_hero_desc: "캠퍼스에 NOCO를 배포하거나 공장에 모듈식 자동화 로봇을 통합하는 데 관심이 있으신가요? 저희가 도와드리겠습니다.",
    contact_hq: "본사",
    contact_hq_addr: "서울시 광진구 능동로 120<br>건국대학교 중장비동 303호 KU 스타트업존",
    contact_email: "이메일로 연락하기",
    contact_response: "응답 시간: 24시간 이내",
    
    contact_form_interested: "관심사항을 선택하세요",
    contact_form_partnership: "파트너십",
    contact_form_product: "제품 견적",
    contact_form_tech: "기술 문의",
    contact_form_name: "이름",
    contact_form_name_placeholder: "홍길동",
    contact_form_company: "회사명",
    contact_form_company_placeholder: "커피바라 주식회사",
    contact_form_email: "이메일 주소",
    contact_form_email_placeholder: "example@email.com",
    contact_form_message: "메시지",
    contact_form_message_placeholder: "프로젝트나 필요사항에 대해 알려주세요...",
    contact_form_submit: "메시지 전송",
    
    contact_ces_title: "CES 2026에 참석하시나요?",
    contact_ces_desc: "서울통합관 부스를 방문하여 NOCO를 직접 보세요. 라스베이거스에서 미팅을 일정에 잡아봅시다.",
    contact_ces_button: "CES 미팅 예약",
    
    // About
    about_hero_title: "순환경제 엔지니어링",
    about_hero_desc: "우리는 고급 로봇공학과 Edge AI를 결합하여 세계가 폐기물을 처리하는 방식을 재정의합니다.",
    
    about_idea_title: "아이디어에서 혁신까지",
    about_idea_desc: "커피바라는 2025년 플라스틱 위기를 기술로 해결하는 데 열정을 가진 엔지니어 팀에 의해 설립되었습니다. 우리는 수작업 분리가 재활용의 병목임을 깨달았습니다.<br><br>우리의 사명은 로봇공학과 인공지능을 사용하여 이 과정을 자동화하는 것입니다. 대학 랩 프로젝트에서 시작하여 건국대학교 캠퍼스타운의 입주 스타트업으로 성장했으며, 컴퓨터 비전을 활용하여 컵, 뚜껑, 액체를 자동으로 분리하는 독점 'NOCO' 시스템을 개발하고 있습니다.",
    about_milestones: "주요 이정표",
    about_milestone_2026: "CES 2026 참가업체 선정 (서울통합관)",
    about_milestone_2025_1: "특허 출원: AI 기반 분리 및 수집 장치",
    about_milestone_2025_2: "건국대학교 캠퍼스타운 입주 스타트업",
    about_milestone_2024: "제22회 임베디드 SW 경진대회 대상 (장관상) 수상",
    
    about_competencies_title: "핵심 역량",
    about_competencies_desc: "우리는 환경 요구와 엔지니어링 가능성 사이의 간격을 좁힙니다.",
    about_comp_vision: "Edge AI 비전",
    about_comp_vision_desc: "최소 지연 시간과 최대 개인정보 보호를 위해 기기에서 직접 실행되는 실시간 물체 감지 및 분류입니다.",
    about_comp_robotics: "소프트 로봇공학",
    about_comp_robotics_desc: "다양한 컵 모양을 처리하고, 뚜껑을 분리하며, 99% 적재 효율을 보장하는 적응형 메커니즘 설계입니다.",
    about_comp_iot: "스마트 IoT",
    about_comp_iot_desc: "충전 수준 및 기계 상태에 대한 실시간 데이터 수집으로 최적화된 폐기물 수거 경로 계획을 지원합니다.",
    
    about_team_title: "팀 소개",
    about_team_desc: "재활용의 미래를 만드는 엔지니어와 비전가들입니다.",
    
    about_values_title: "우리의 가치",
    about_value_sustainability: "지속가능성",
    about_value_sustainability_desc: "우리는 기술을 활용하여 환경에 실질적인 영향을 미칩니다.",
    about_value_precision: "정밀한 엔지니어링",
    about_value_precision_desc: "우리는 견고한 하드웨어와 최적화된 소프트웨어를 통해 높은 신뢰성을 추구합니다.",
    about_value_customer: "고객 중심",
    about_value_customer_desc: "우리는 사용자 중심의 설계와 피드백으로 실제 문제를 해결합니다.",
    
    about_back: "홈으로 돌아가기",
    
    // Technology
    tech_hero_title: "Edge AI로 구동되는 고급 로봇공학",
    tech_hero_desc: "우리는 단순히 쓰레기통을 만들지 않습니다. 우리는 혼란스러운 환경에서 비정형화된 물체를 처리할 수 있는 자율 분류 모듈을 엔지니어링합니다.",
    
    tech_core_title: "핵심 기술",
    tech_core_desc: "우리의 독점 스택은 단순 재활용을 넘어 정밀 자동화를 가능하게 합니다.",
    
    tech_ai_title: "경량 Edge AI",
    tech_ai_desc: "YOLO 기반 비전 모델은 1초 미만의 지연 시간으로 임베디드 시스템에서 실행됩니다. 클라우드 의존성 없이 작동하며 불안정한 네트워크 환경에서도 개인정보 보호와 실시간 처리를 보장합니다.",
    tech_ai_tag1: "YOLOv8",
    tech_ai_tag2: "Edge AI",
    
    tech_gripper_title: "적응형 그리퍼",
    tech_gripper_desc: "비정형화된 물체를 위해 설계되었습니다. 소프트 로봇공학에서 영감을 받은 우리의 메커니즘은 압축된 컵, 미끄러운 표면, 다양한 재료(PET, PP, 종이)를 정밀한 힘 제어로 안전하게 처리할 수 있습니다.",
    tech_gripper_tag1: "로봇공학",
    tech_gripper_tag2: "구체화된 AI",
    
    tech_modular_title: "모듈식 아키텍처",
    tech_modular_desc: "확장성을 위해 구축되었습니다. 각 모듈(Vision, Separation, Cleaning)은 Object-Oriented HW/SW를 통해 독립적으로 작동하여 산업용 팩토리 라인을 위한 쉬운 유지보수 및 커스터마이제이션을 가능하게 합니다.",
    tech_modular_tag: "모듈식",
    
    tech_noco_title: "'NOCO' 프로세스",
    tech_noco_desc: "우리가 핵심 기술을 적용하여 일회용 컵 위기를 해결하는 방법입니다.",
    
    tech_step1: "인식",
    tech_step1_title: "인식",
    tech_step1_desc: "우리의 컴퓨터 비전 시스템은 압축되거나 정렬되지 않은 상태에서도 즉시 들어오는 컵과 재료를 감지하고 분류합니다.",
    tech_step1_feat1: "실시간 감지",
    tech_step1_feat2: "다중 물체 분류",
    tech_step1_accuracy: "99.9% 감지 정확도",
    tech_step1_multi: "다중 물체 분류",
    
    tech_step2: "분리",
    tech_step2_title: "분리",
    tech_step2_desc: "적응형 그리퍼는 재료 특성 및 오염 수준에 따라 물체를 안전하게 파악하고 분리 스테이션으로 이동합니다.",
    tech_step2_feat1: "비파괴 처리",
    tech_step2_feat2: "5개 이상의 컵 크기 처리",
    tech_step2_non: "비파괴 처리",
    tech_step2_sizes: "5개 이상의 컵 크기 처리",
    
    tech_step3: "세척",
    tech_step3_title: "세척",
    tech_step3_desc: "오염 감지 및 제거 프로세스는 깨끗한 1급 재료만 다음 단계로 진행되도록 합니다.",
    tech_step3_feat1: "최소 물 사용",
    tech_step3_feat2: "고속 건조",
    tech_step3_water: "최소 물 사용",
    tech_step3_drying: "고속 건조",
    
    tech_step4: "적재",
    tech_step4_title: "적재",
    tech_step4_desc: "깨끗한 재료는 자동으로 압축하거나 재활용 시설로 배송되며, 처리량을 최대화하고 폐기물을 최소화합니다.",
    tech_step4_feat1: "부피 감소",
    tech_step4_feat2: "IoT 경보",
    tech_step4_volume: "10배 부피 감소",
    tech_step4_alerts: "IoT 충전 수준 경보",
    
    tech_specs_title: "기술 사양",
    tech_spec_processing_speed: "처리 속도",
    tech_spec_vision: "비전 시스템",
    tech_spec_accuracy: "인식 정확도",
    tech_spec_connectivity: "연결성",
    tech_spec_power: "전력 소비",
    tech_spec_DOF: "DOF ( Degrees of Freedom, 모터 갯수 )",
    tech_spec_speed: "처리 속도",
    tech_spec_speed_val: "5초/컵",
    tech_spec_vision_val: "Edge AI (저가 HW)",
    tech_spec_accuracy_val: "> 99.5%",
    tech_spec_connectivity_val: "Wi-Fi / Ethernet",
    tech_spec_power_val: "저전력 모드 지원",
    tech_spec_stack: "소프트웨어 스택",
    tech_spec_stack_val: "Python, C++",
    
    tech_custom_title: "맞춤형 구성이 필요하신가요?",
    tech_custom_desc: "당신의 공장을 위한 맞춤형 사양이 필요하신가요?",
    tech_custom_button: "엔지니어링 팀에 문의",
  }
};

// 현재 언어 설정 및 변경 함수
let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateLanguageButton();
  }
}

function getTranslation(key) {
  return translations[currentLanguage][key] || translations['en'][key] || key;
}

function updatePageContent() {
  // 모든 data-i18n 속성을 가진 요소 업데이트
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(key);
    
    if (element.tagName === 'INPUT' && element.type === 'placeholder') {
      element.placeholder = translation;
    } else if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
      element.placeholder = translation;
    } else {
      element.innerHTML = translation;
    }
  });
  
  // placeholder 속성으로 관리되는 요소들
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = getTranslation(key);
  });
}

function updateLanguageButton() {
  const langToggle = document.getElementById('language-toggle');
  if (langToggle) {
    langToggle.textContent = currentLanguage === 'en' ? '한국어' : 'English';
  }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  updatePageContent();
  updateLanguageButton();
});
