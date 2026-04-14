import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Card = ({
  children,
  className = "",
  as: Component = "div",
}: CardProps) => {
  return (
    <Component className={`${styles.card} ${className}`.trim()}>
      {children}
    </Component>
  );
};

export const CardHeader = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`${styles.cardHeader} ${className}`.trim()}>{children}</div>
);

export const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`${styles.cardContent} ${className}`.trim()}>{children}</div>
);

export const CardFooter = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`${styles.cardFooter} ${className}`.trim()}>{children}</div>
);
