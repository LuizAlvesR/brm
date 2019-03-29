package br.com.hellabenawenthur.loja.conf;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import br.com.hellabenawenthur.loja.conf.AppWebConfiguration;

public class ServletSpringMVC extends AbstractAnnotationConfigDispatcherServletInitializer {
	
	@Override
	protected Class<?>[] getRootConfigClasses() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	protected Class<?>[] getServletConfigClasses() {
		// TODO Auto-generated method stub
		return new Class[] { AppWebConfiguration.class };
	}
	
	@Override
	protected String[] getServletMappings() {
		// TODO Auto-generated method stub
		return new String[] { "/" };
	}
	
}
