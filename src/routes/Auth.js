import { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email"){
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="이메일을 입력하세요" required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="비밀번호를 입력하세요" required value={password} onChange={onChange} />
                <input type="submit" placeholder="로그인" />
            </form>
            <div>
                <button>Google 아이디로 로그인하기</button>
                <button>Github 아이디로 로그인하기</button>
            </div>
        </div>
    );
};

export default Auth;