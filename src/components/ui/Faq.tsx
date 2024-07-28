
const faqData = [
  {
    title: "How to install it with windows server ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?",
  },
  {
    title: "How to use it with other integrations ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?",
  },
  {
    title: "How to build an app ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?",
  },
  {
    title: "How to download it ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?",
  },
  {
    title: "How to use extensions ?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?",
  },
];

export default function Faq() {
  return (
    <div className="bg-gray-100 pt-10">
      <div className="mx-auto px-10">
        <div className="p-2 bg-gray-100 rounded">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-sm text-gray-950">
              <div className="text-3xl">
                Frequently asked <span className="font-medium">Questions</span>
              </div>
              <div className="my-2">Wondering how our service works ?</div>
              <div className="mb-2">
                Confused about how we can improve your business ?
              </div>
              <div className="text-xs text-gray-600">
                Dive into our FAQ for more details
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="p-1">
                {faqData.map((fq) => (
                  <div key={fq.title} className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium rounded-sm text-lg flex text-gray-800 flex-row-reverse  cursor-pointer text-black bg-white hover:bg-white">
                      <div className="flex-auto">{fq.title}</div>
                      <div className="px-2 mt-1">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`feather feather-chevron-up w-5 h-5 transition-transform `}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 px-14 collapse-content p-1 text-justify  text-gray-800  bg-white">
                      {fq.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
