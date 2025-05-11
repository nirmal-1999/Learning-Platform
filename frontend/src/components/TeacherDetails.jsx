import Marquee from 'react-fast-marquee';

const teachers = [
    { name: 'Nirmal Kumar', subject: 'DSA', education: 'B.Tech CSE, IIIT Kalyani', degination: 'Software Development Engineer', experiance: '2 Years' },
    { name: 'John Doe', subject: 'DBMS', education: 'M.Tech, IIT Bombay', degination: 'Software Development Engineer', experiance: '2 Years' },
    { name: 'Jane Smith', subject: 'OS', education: 'PhD, MIT', degination: 'Software Development Engineer', experiance: '2 Years' },
];

const TeacherDetails = () => {

    const repeated = [...teachers, ...teachers];
    return (
        <section className="py-6" style={{ backgroundColor: "rgb(244, 242, 238)" }}>
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
                {repeated.map((teacher, index) => (
                    <div
                    key={index}
                    className="mx-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        alt="teacher"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                    <p className="text-blue-600 text-sm">{teacher.subject}</p>
                    <p className="text-gray-600 text-sm">{teacher.degination}</p>
                    <p className="text-gray-600 text-sm">Experience: {teacher.experiance}</p>
                    <p className="text-gray-600 text-sm">{teacher.education}</p>
                  </div>
                  
                ))}
            </Marquee>
        </section>
    );
};

export default TeacherDetails;
