import React, { ReactNode } from 'react';

interface ReadProps {
    children: ReactNode;
    params: {
        id: string;
    };
}

interface Topic {
    id: string;
    title: string;
    body: {content : string};
}

/* 사용자가 글을 읽기만 하는 페이지이므로 상호작용이 일어나지 않음 -> 서버 컴포넌트로 */
export default async function Read(props: ReadProps): Promise<JSX.Element> {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`, { cache: 'no-store' }); //캐시를 지워서 글 수정했을 때 본문도 업데이트 되게 하기
    const topic = await resp.json();
    return (
        <>
            <h2>{topic.title}</h2>
            <p>{topic.body.content}</p>
            parameters : {props.params.id}
        </>
    );
}