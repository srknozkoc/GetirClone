import React from "react";
import ContentLoader from "react-content-loader";

export function SkeletonItem(props) {
    return <ContentLoader
        speed={1}
        width={165}
        height={230}
        viewBox="0 0 165 230"
        backgroundColor="#ffffff"
        foregroundColor="#e6e6e6"
        {...props}
    >
        <rect x="34" y="164" rx="3" ry="3" width="46" height="7"/>
        <rect x="87" y="144" rx="0" ry="0" width="1" height="1"/>
        <rect x="7" y="7" rx="4" ry="4" width="151" height="144"/>
        <rect x="85" y="164" rx="3" ry="3" width="46" height="7"/>
        <rect x="20" y="183" rx="3" ry="3" width="124" height="9"/>
        <rect x="28" y="197" rx="3" ry="3" width="107" height="8"/>
        <rect x="55" y="216" rx="3" ry="3" width="53" height="7"/>
    </ContentLoader>;
}

export default function SkeletonLoading() {
    const skeletonItems = Array.from(Array(6).keys());

    return (<div className={'grid grid-cols-4 gap-6'}>
        {skeletonItems.map((_, i) => <SkeletonItem key={i}/>)}
    </div>);
}
