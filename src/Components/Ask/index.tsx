import React from 'react';
import { useRecoilState } from 'recoil';
import { ctnStates } from '../../recoil/atoms/ctnStates';

const AskView = () => {
	const [ctn, setCtn] = useRecoilState(ctnStates);
	return <div>{ctn}</div>;
};

export default AskView;
