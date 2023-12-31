import Header from "@/components/Header/Header";
import TabBar from "@/components/TabBar/TabBar";
import { cls } from "@/libs/client/utils";

interface LayoutProps {
	title?: string;
	canGoBack?: boolean;
	hasTabBar?: boolean;
	children: React.ReactNode;
}

const Template = ({ title, canGoBack, hasTabBar, children }: LayoutProps) => {
  return (
    <>
      {title || canGoBack ? <Header title={title} canGoBack={canGoBack} /> : null}
        <div className={cls("pt-12", hasTabBar ? "pb-32" : "")}>
          {children}
        </div>
      {hasTabBar ? <TabBar /> : null}
    </>
  )
};

export default Template;