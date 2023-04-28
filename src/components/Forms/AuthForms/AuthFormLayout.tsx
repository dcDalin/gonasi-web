interface IAuthFormLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AuthFormLayout({
  children,
  title,
}: IAuthFormLayoutProps) {
  return (
    <div>
      <h4 className='font-bold'>{title}</h4>
      {children}
    </div>
  );
}
