import { useState } from "react";
import YiranChenImage from "../assets/speakers/yiranChen.jpg";
import DavidZPanImage from "../assets/speakers/panDavid.jpg";
import TulikaMitraImage from "../assets/speakers/tulikaMitra.jpg";
import peterBeerelImage from "../assets/speakers/peterBeerel.jpeg";
import YizhouSunImage from "../assets/speakers/yizhouSun.jpg";

import Modal from "./Modal";

const Speakers = () => {
  const speakers = [
    {
      name: "Peter A. Beerel",
      title:
        "Professor and Associate Chair of the Computer Engineering Division",
      institution:
        "University of Southern California, Viterbi School of Engineering",
      topic:
        "Topic: Efficient and Robust Personalization and Adaptation of Large Models",
      abstract: "Abstract for Peter A. Beerel will be updated soon.",
      photo: peterBeerelImage.src, // Placeholder for future speakers
      link: "https://viterbi.usc.edu/directory/faculty/Beerel/Peter", // Placeholder link
      slidePdf: "/speakers/peterBeerel.pdf", // Placeholder PDF
    },
    {
      name: "Yiran Chen",
      title: "John Cocke Distinguished Professor",
      institution: "ECE, Duke University",
      topic:
        "Topic: Towards Efficient Generative AI - Software/Hardware Co-Design for the Next Generation of Intelligent Systems",
      abstract:
        'As Generative Artificial Intelligence (Generative AI) continues to achieve breakthroughs in content creation, code generation, and human-computer interaction, its demands on computational performance and system efficiency are rapidly increasing. At the same time, the traditional paradigm of "model first, hardware follows" is no longer sufficient to meet the growing complexity and diversity of generative models. This calls for a paradigm shift toward software/hardware co-design to achieve a unified balance of performance, energy efficiency, and flexibility. In this talk, we will explore co-optimization strategies for generative AI from both algorithmic and hardware perspectives. We begin by analyzing the runtime characteristics and performance bottlenecks of state-of-the-art generative models—such as large language models (LLMs) and diffusion models—on mainstream computing platforms. On the algorithmic side, we will discuss model-specific hardware adaptation strategies, such as leveraging dynamic sparse activation to reduce LLMs inference memory and employing skip-step sampling to accelerate diffusion model generation. On the hardware side, we will examine architecture-level enhancements that improve model execution efficiency, such as using transmissible sparsity and multiplication to accelerate general matrix computations. Finally, we will conclude by discussing the potential and key challenges of software/hardware co-design in enabling the next generation of efficient, scalable, and sustainable generative AI systems.',
      photo: YiranChenImage.src,
      link: "https://ece.duke.edu/people/yiran-chen/",
      slidePdf: "/speakers/yiranChen.pdf",
    },
    {
      name: "Tulika Mitra",
      title:
        "Vice-Provost (Academic Affairs) and Provost's Chair Professor of Computer Science",
      institution: "National University of Singapore",
      topic: "Topic: Adaptive Spatial Accelerators for Sparse LLMs",
      abstract:
        "Large Language Models (LLMs) introduce significant computational challenges. Sparsity has emerged as a critical approach to reduce computation and memory footprint while preserving model quality. However, sparse workloads exhibit irregular access patterns and dynamic behavior that conventional spatial accelerators, originally designed for dense, structured computations, fail to exploit efficiently. In this talk, I will present novel adaptive spatial accelerators that embrace the irregularity of sparse LLM workloads. Unlike traditional fixed-dataflow designs, these accelerators employ programmable orchestration mechanisms that dynamically reconfigure dataflows based on real-time sparsity patterns. This adaptive approach achieves the high efficiency of specialized hardware while retaining the flexibility required to manage diverse sparsity structures found in modern LLMs.",
      photo: TulikaMitraImage.src,
      link: "https://www.comp.nus.edu.sg/~tulika/",
      slidePdf: "/speakers/tulikaMitra.pdf",
    },
    {
      name: "David Z. Pan",
      title: "Silicon Laboratories Endowed Chair / Professor ",
      institution: "ECE, The University of Texas at Austin",
      topic:
        "Topic: Closing the Generative AI–Hardware Loop: Photonic Acceleration, Memory-Efficient Training, and AI-Driven IC Design",
      abstract:
        "The recent breakthroughs in Generative AI have been powered by the synergistic scaling of models, data, and compute infrastructure. Yet, this growth comes with escalating computational demands that increasingly outpace the progress predicted by Moore’s Law. In this talk, we present recent work toward closing the loop across three axes. First, we introduce our first photonic-transformer accelerator, demonstrating how optical computing can significantly enhance throughput and energy efficiency. Second, we discuss APOLLO, a theoretically grounded optimization framework for large-scale language model training that achieves state-of-the-art memory efficiency. Third, we show how Generative AI can accelerate hardware and EDA workflows themselves—from photonic simulations to large language model–assisted analog circuit design—highlighting the potential for AI to recursively improve the systems on which it runs. By unifying advances in novel hardware, hardware-efficient AI algorithms, and AI-driven chip design, this work outlines a path toward sustainable and scalable machine intelligence through full-stack co-design.",
      photo: DavidZPanImage.src,
      link: "https://www.ece.utexas.edu/people/faculty/david-z-pan",
      slidePdf: "/speakers/panDavid.pdf",
    },

    {
      name: "Yizhou Sun",
      title: "Professor at Computer Science Department",
      institution: "University of California, Los Angeles",
      topic: "Topic: Energy-Efficient LLM Inference",
      abstract:
        "Abstract: Efficient LLM inference receives wider attention with higher demand for edge devices and agentic deployment. In these applications, not only does the inference speed become more important but also the energy consumption of the devices becomes more critical. In this talk, we will present two lines of research on efficient LLM inference. The first line of work is called HMT (Hierarchical Memory Transformers), which leverages memory hierarchy to handle streaming/extremely long context to reduce the memory bound and improve inference efficiency. The second line of work is called lossy speculative decoding that improves both inference speed and inference quality with less energy consumption. In the end, we will provide a discussion on potential hardware implementation of these models.",
      photo: YizhouSunImage.src, // Placeholder for future speakers
      link: "https://web.cs.ucla.edu/~yzsun/", // Placeholder link
      slidePdf: null,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedAbstract, setSelectedAbstract] = useState("");

  const handleOpen = (abstract) => {
    setSelectedAbstract(abstract);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedAbstract("");
  };

  return (
    <section id="speakers" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary-800 animate-on-scroll">
            Keynote Speakers
          </h2>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto animate-on-scroll">
            Learn from world-renowned experts who are at the forefront of
            scientific innovation
          </p>

          <div class="mt-6 text-center animate-on-scroll mb-6">
            <p class="text-gray-600 italic">
              Note: The speakers are in the order of their last name.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className=" bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-semibold text-primary-800">
                    {speaker.name}
                  </h3>
                  <p className="text-secondary-700 font-medium">
                    {speaker.title}
                  </p>
                  <p className="text-secondary-600 text-sm mb-3">
                    {speaker.institution}
                  </p>
                  <p className="text-gray-600 text-sm">{speaker.topic}</p>
                  <button
                    className="abstract button mt-4 text-primary-600 underline"
                    onClick={() => handleOpen(speaker.abstract)}
                  >
                    Show Abstract
                  </button>

                  {speaker.slidePdf && (
                    <a
                      href={speaker.slidePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-primary-600 underline"
                    >
                      Download Slides
                    </a>
                  )}
                  <a
                    href={speaker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-primary-600 underline"
                  >
                    Bio
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll">
            <p className="text-gray-700">
              Additional speakers will be announced soon. Check back for
              updates.
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={handleClose} title="Abstract">
        <p>{selectedAbstract}</p>
      </Modal>
    </section>
  );
};

export default Speakers;
