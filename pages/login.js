import Link from 'next/link';

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        //이걸 안해주면 form 태그의 원래 기능상 전송페이지로 넘어가게 됨. SPA의 장점을 잃게 된다. 따라서 그 원래 기능을 막는 것
    }
    return (
        <div className="px-4 py-5 my-5 w-50">
            <h1 className="display-9 fw-bold py-10">로그인</h1>
            <form
                onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label 
                        htmlFor="exampleFormControlInput1" 
                        className="form-label">
                            이메일
                    </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="subjectInput" 
                        className="form-label">
                            비밀번호
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="비밀번호를 입력하세요."/>
                </div>
                <button className='btn btn-primary btn-lg'>로그인 하기</button>
            </form>
        </div>
    );
};