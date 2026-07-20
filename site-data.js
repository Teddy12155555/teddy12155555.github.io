/*
 * Website content
 *
 * Add new highlights and publications at the TOP of their lists.
 * Keep images in asset/image/. Use image: null when no thumbnail is available.
 */
window.SITE_DATA = {
  highlights: [
    {
      date: "2026-05-01",
      title: "Adapt2Hide: Leveraging Off-the-shelf Autoencoder for Reversible Visual Processing",
      venue: "ICIP 2026"
    },
    {
      date: "2026-03-17",
      title: "DE-Seg: A Dual-Teacher and Edge-Guided Framework for Semi-Supervised Medical Image Segmentation",
      venue: "ICME 2026"
    },
    {
      date: "2025-11-11",
      title: "Dragonite: Single-Step Drag-based Image Editing with Geometric-Semantic Guidance",
      venue: "WACV 2026"
    },
    {
      date: "2025-11-11",
      title: "DirectDrag: High-Fidelity, Mask-Free, Prompt-Free Drag-based Image Editing via Readout-Guided Feature Alignment",
      venue: "WACV 2026"
    },
    {
      date: "2025-05-20",
      title: "ExDF: Explainable Deepfake Detection with Vision-Language Model",
      venue: "ICIP 2025"
    },
    {
      date: "2025-02-26",
      title: "Towards More General Video-based Deepfake Detection through Facial Feature Guided Adaptation for Foundation Model",
      venue: "CVPR 2025"
    },
    {
      date: "2024-08-05",
      title: "Generalized Image-based Deepfake Detection through Foundation Model Adaptation",
      venue: "ICPR 2024"
    }
  ],

  publications: [
    {
      title: "Adapt2Hide: Leveraging Off-the-shelf Autoencoder for Reversible Visual Processing",
      authors: "Ernie Chu, I-Sheng Fang, Tai-Ming Huang, Pin-Yen Chiu, Vishal M. Patel, Jun-Cheng Chen",
      venue: "ICIP 2026",
      image: "asset/image/Adapt2Hide.png",
      links: []
    },
    {
      title: "DE-Seg: A Dual-Teacher and Edge-Guided Framework for Semi-Supervised Medical Image Segmentation",
      authors: "Wen-Shan Hsu*, Tai-Ming Huang*, Hui-Guan Yuan, Wen-Huang Cheng, Kai-Lung Hua",
      venue: "ICME 2026",
      image: "asset/image/DE-SEG.png",
      links: []
    },
    {
      title: "Dragonite: Single-Step Drag-based Image Editing with Geometric-Semantic Guidance",
      authors: "Meng-Ting Jhong, Tai-Ming Huang, Shang-Fu Chen, Wen-Huang Cheng, Kai-Lung Hua",
      venue: "WACV 2026",
      image: "asset/image/Dragonite.png",
      links: []
    },
    {
      title: "DirectDrag: High-Fidelity, Mask-Free, Prompt-Free Drag-based Image Editing via Readout-Guided Feature Alignment",
      authors: "Sheng-Hao Liao, Shang-Fu Chen, Tai-Ming Huang, Wen-Huang Cheng, Kai-Lung Hua",
      venue: "WACV 2026",
      image: "asset/image/DirectDrag.png",
      links: [
        { label: "Project page", url: "https://frakw.github.io/DirectDrag/" }
      ]
    },
    {
      title: "ThinkFake: Reasoning in Multimodal Large Language Models for AI-Generated Image Detection",
      authors: "Tai-Ming Huang, Wei-Tung Lin, Kai-Lung Hua, Wen-Huang Cheng, Junichi Yamagishi, Jun-Cheng Chen",
      venue: "arXiv 2025",
      image: "asset/image/Thinkfake.png",
      links: []
    },
    {
      title: "ExDF: Explainable Deepfake Detection with Vision-Language Model",
      authors: "Shu-Tzu Lo*, Tai-Ming Huang*, Yue-Hua Han, Kai-Lung Hua, Jun-Cheng Chen",
      venue: "ICIP 2025 · Spotlight",
      image: "asset/image/ExDF.png",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/11084529" },
        { label: "Code", url: "https://github.com/aiiu-lab/ExDF" }
      ]
    },
    {
      title: "Towards More General Video-based Deepfake Detection through Facial Feature Guided Adaptation for Foundation Model",
      authors: "Yue-Hua Han, Tai-Ming Huang, Kai-Lung Hua, Jun-Cheng Chen",
      venue: "CVPR 2025",
      image: "asset/image/cvpr.PNG",
      links: [
        { label: "Paper", url: "https://arxiv.org/pdf/2404.05583" },
        { label: "Code", url: "https://github.com/aiiu-lab/DFD-FCG" }
      ]
    },
    {
      title: "Generalized Image-based Deepfake Detection through Foundation Model Adaptation",
      authors: "Tai-Ming Huang, Yue-Hua Han, Ernie Chu, Shu-Tzu Lo, Kai-Lung Hua, Jun-Cheng Chen",
      venue: "ICPR 2024",
      image: "asset/image/adaptCLIP.PNG",
      links: [
        { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-3-031-78305-0_13" },
        { label: "Code", url: "https://github.com/aiiu-lab/AdaptCLIP" }
      ]
    },
    {
      title: "VDNet: Video Deinterlacing Network Based on Coarse Adaptive Module and Deformable Recurrent Residual Network",
      authors: "Yin-Chen Yeh, Jilyan Dy, Tai-Ming Huang, Yung-Yao Chen, Kai-Lung Hua",
      venue: "Neural Computing and Applications 2022",
      image: "asset/image/VDNet.PNG",
      links: [
        { label: "Paper", url: "https://link.springer.com/article/10.1007/s00521-022-07116-5" }
      ]
    },
    {
      title: "A Data Hiding Scheme Based on Absolute Moment Block Truncation Coding and Lookup Table",
      authors: "Ting-Kai Yang, Shang-Fu Chen, Tai-Ming Huang, Julianne Tan, Jilyan Dy, Kai-Lung Hua",
      venue: "ICCE-TW 2022",
      image: null,
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/9869120" }
      ]
    },
    {
      title: "Unpaired Image-to-Image Translation Using Negative Learning for Noisy Patches",
      authors: "Yu-Hsiang Hung, Julianne Tan, Tai-Ming Huang, Shang-Che Hsu, Yi-Ling Chen, Kai-Lung Hua",
      venue: "IEEE MultiMedia 2022",
      image: "asset/image/PanelGAN.PNG",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/9780547" }
      ]
    },
    {
      title: "Adjustable Model Compression Using Multiple Genetic Algorithm",
      authors: "Jose Jaena Mari Ople, Tai-Ming Huang, Ming-Chih Chiu, Yi-Ling Chen, Kai-Lung Hua",
      venue: "IEEE Transactions on Multimedia 2021",
      image: "asset/image/Adjustable.PNG",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/9665241" }
      ]
    }
  ]
};
