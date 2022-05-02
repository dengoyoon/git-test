import Link from 'next/link';

export default function TryLogin() {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-9 fw-bold py-10">로그인을 해주세요!</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mt-4 mb-4 fw-normal">
                NextJS와 MongoDB를 이용한 로그인 세션 구현 샘플입니다.
                <br />
                계정이 있으시면 아래 로그인 버튼을 누르시고, 
                <br />
                없으시면 가입하기 버튼을 눌러 계정을 만드십시요.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link href="/login">
                    <button 
                        className='btn btn-primary btn-lg'>
                        로그인
                    </button>
                </Link>
                <Link href="/signup">
                    <button 
                        className='btn btn-outline-primary btn-lg ml-3'>
                        회원가입
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};